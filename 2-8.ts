const add = function (x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  }
  return x + y
}

let add2: (x: number, y: number, z?: number) => number = add

let str = 'string' // 没有给 str 指定类型
// str = 123       // 报错

// 当没有给一个变量指定类型并且进行赋值的时候，typescript会给该变量推测出一个类型
// 因此在 let str = 'string' 时， str就被推断为是 string 类型， 因此 str = 123 会报错

// 同理， 没有给 add 指定类型，所以 typescript 根据赋值判断 add 是一个函数类型