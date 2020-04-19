export interface ErrorMessage {
  message: string
  stack: Array<{
    line: number
    column: number
    filename: string
  }>
}

interface Message {
  line: number
  column: number
  filename: string
}

export function parseError(err: Error): ErrorMessage {
  let stack: Array<Message> = _parse(err)
  return {
    message: _parseTypeError(err),
    stack,
  }
}

// 捕获错误类型
function _parseTypeError (err: Error): string {
  const regMessage = /TypeError:\s*\w+\s*\w+\S/g
  let res: RegExpExecArray | null = regMessage.exec(err.toString())
  return res ? res[0] : ''
}

// 捕获错误请求
function _parse (err: Error): Message[] {
  const regUrl = /(http|https):\/\/([\w.]+\/?)\S*/g
  let errStr = err.toString()
  let stack = []
  errStr.replace(regUrl, function (res): string {
    let obj: Message = getObj(res)
    stack.push(obj)
    return res
  })
  return stack
}

// 解析
function getObj (res: string): Message {
  let obj: Message = {
    line: 0,
    column: 0,
    filename: ''
  }, splitStr = 'js:'
  let urlArr = res.split(splitStr)
  let lineAndColumn = urlArr[1].split(':')
  obj['filename'] = urlArr[0] + 'js'
  obj['line'] = parseInt(lineAndColumn[0])
  obj['column'] = parseInt(lineAndColumn[1])
  return obj
}

// const err = new Error(`
// TypeError: Error raised
//   at bar http://192.168.31.8:8000/c.js:2:9
//   at foo http://192.168.31.8:8000/b.js:4:15
//   at calc http://192.168.31.8:8000/a.js:4:3
//   at <anonymous>:1:11
//   at http://192.168.31.8:8000/a.js:22:3
// `)

// console.log(parseError(err))