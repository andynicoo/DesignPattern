// 行程类
class Trip {
    constructor(car) {
        this.car = car
        this.distance = 5
    }
    start() {
        console.log(`Name is ${this.car.name}, NO. is ${this.car.number}`)
    }
    end() {
        console.log(`打车金额为 ${this.car.price * this.distance}`)
    }
}
// 车类
class Car {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
}
// 专车类
class SpecialCar extends Car {
    constructor(name, number) {
        super(name, number)
        this.price = 2
    }
}
// 快车类
class FastCar extends Car {
    constructor(name, number) {
        super(name, number)
        this.price = 1
    }
}

// 测试
// 初始化专车、行程数据
let car1 = new SpecialCar('special car', 's001')
let trip1 = new Trip(car1)
trip1.start()
trip1.end()
// 初始化快车、行程数据
let car2 = new FastCar('fast car', 'f001')
let trip2 = new Trip(car2)
trip2.start()
trip2.end()

/* 打印
 * Name is special car, NO. is s001
 * 打车金额为 10
 * Name is fast car, NO. is f001
 * 打车金额为 5
 */
