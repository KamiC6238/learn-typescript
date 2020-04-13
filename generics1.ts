interface IWithLength {
  length: number
}

// 约束泛型, 使传入的参数具有一定的限制条件
// 这里对传入的参数要求必须有length属性
function echoWithLength<T extends IWithLength>(arg: T): T {
  return arg
}

const res1 = echoWithLength(123)            // 报错，因为整形没有length属性
const res2 = echoWithLength('str')          // 不报错，因为字符串可以通过 str.length获取字符串长度
const res3 = echoWithLength({ length: 10 }) // 不报错
const res4 = echoWithLength([1,2,3])        // 不报错


