class Queue<T> {
  private data = []

  push (item: T) {
    return this.data.push(item)
  }
  
  pop (): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
queue.push('str')  // 报错，因为泛型指定了queue是一个整形队列

const queue2 = new Queue<string>()
queue2.push(1)      // 报错，原因同上
queue2.push('str')  // 不报错

// 如果不使用泛型, 而toFixed是只有整形才有的方法
// 因此代码执行到 'str'.toFixed的时候就会报错
// 但是这个错误并没有在写代码时报错
// console.log(queue.pop().toFixed())


// 使用了泛型之后，可以灵活的使用不同的数据类型
interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = {
  key: 1,
  value: 'string'
}

let kp2: KeyPair<string, number> = {
  key: 'string',
  value: 1
}


interface IPlus<T> {
  (a: T, b: T): T
}

function plus (a: number, b: number): number {
  return a + b
}

function connect (a: string, b: string): string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect