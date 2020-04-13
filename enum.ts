// 如果是一定范围内的某些变量，那么可以使用枚举类型

// 如果不给枚举变量中的属性设置值，默认从0开始
// 如果设置第一个Up = 10,那么后续会自动变为Down = 11, Left = 12, Right = 13
enum Direction {
  Up = 10,
  Down,    // 11
  Left,    // 12
  Right    // 13
}

console.log(Direction.Up)   // 10
console.log(Direction[10])   // Up