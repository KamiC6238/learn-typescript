function sum (a: number, b: number): number {
  return a + b
}

// 如果直接赋值给变量, 下面这种写法会很长
let getSum: (a: number, b: number) => number = sum

// 使用类型别名，避免写重复的代码
type SumType = (a: number, b: number) => number
let getSum1: SumType = sum

// 使用联合类型时，不允许下面的写法，因此要用类型别名
// function getName (n: string | () => string) {}

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName (n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  }
  return n()
}