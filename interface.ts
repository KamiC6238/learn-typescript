interface Radio {
  switchRadio (): void
}

// interface Battery {
//   checkBatteryStatus ()
// }

// 接口之间可以继承
interface RadiowWithBattery extends Radio {
  checkBatteryStatus ()
}

class Car implements Radio {
  switchRadio () {}
}

// 当类继承了接口的时候，必须实现接口中定义的方法
// 如果不实现则会报错
class CellPhone implements RadiowWithBattery {
  switchRadio () {}

  checkBatteryStatus () {}
}