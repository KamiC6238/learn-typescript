// 修饰符

class Animal {
  public name: string                        // 公共修饰符，可以被实例访问
  protected color: string                    // protected修饰符，color只能够在该类及其子类中使用
  private weight: number                     // private是私有的，只能在该类使用，子类不能使用
  static colors: string[] = ['red', 'blue']  // 静态属性, Animal.colors
  static isAnimal = function (animal) {      // 静态方法，只能通过Animal.isAnimal来调用
    return animal instanceof Animal
  }
  constructor (name: string) {
    this.name = name
  }

  run () {
    return `${this.name} is running`
  }
}

class Dog extends Animal {
  constructor (name: string) {
    super(name)
    console.log(this.weight)  // 报错， private是私有属性，只能够在该属性所在的类中使用
  }
}

const snake = new Animal('lily')
console.log(snake.name)          
console.log(snake.color)     // 会报错, 因为 color是 protected修饰的

console.log(Animal.isAnimal(snake))      // 用类名调用静态方法
console.log(Animal.colors)               // 类名调用静态属性