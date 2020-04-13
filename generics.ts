// 泛型是指在定义函数、接口或者类的时候不预先指定具体的类型
// 而是在使用的时候才指定类型的一种特征

// 这里可以理解为是一个占位符, 用来接收参数
function echo<T>(arg: T): T {
  return arg
}

const results = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const results2 = swap([0, 'string'])  // results2是参数类型为 [string, number] 的元组