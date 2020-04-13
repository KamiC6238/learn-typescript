class Animal {
  public name: string
  constructor (name: string) {
    this.name = name
  }

  run () {
    return `${this.name} is running`
  }
}

class Cat extends Animal {
  // 在子类使用 constructor 时，必须调用super方法
  constructor (name) {
    super(name)
    console.log(this.name) 
  }
  
  // 重写父类的 run 方法
  run () {
    return 'Meow, ' + super.run()
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run())