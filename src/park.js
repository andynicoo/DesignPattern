// 车
class Car {
    constructor(num) {
        this.num = num
    }
}
// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} //存储摄像头拍摄返回的车辆信息
    }
    in(car) {
        // 通过摄像头获取信息
        const info = this.camera.shot(car)

        // 停到某个停车位
        const i = parseInt(Math.random() * 100 % 100)

        // 此处默认停到停车场第一层，简化逻辑
        const place = this.floors[0].places[i]
        place.in()
        info.place = place

        //记录信息
        this.carList[car.num] = info
    }
    out(car) {
        // 获取信息
        const info = this.carList[car.num]

        //将停车位清空
        const place = info.place
        place.out()

        //显示时间
        this.screen.show(car, info.inTime)

        // 清空记录
        delete this.carList[car.num]
    }
    //记录总的空车位数
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个车位`
        }).join('\n')
    }
}
// 停车场的每一层
class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places || []
    }
    // 计算空的车位数
    emptyPlaceNum() {
        let num = 0
        this.places.forEach(place => {
            if (place.empty) {
                num++
            }
        })
        return num
    }
}
// 车位
class Place {
    constructor() {
        this.empty = true // 车位是否为空
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}
// 摄像头
class Camera {
    shot(car) {
        return {
            num: car.num, // 车牌号
            inTime: Date.now() //驶入时间
        }
    }
}
// 出口显示屏
class Screen {
    show(car, inTime) {
        console.log(`车牌号 ${car.num}`) //车牌号
        console.log(`停车时间 ${Date.now() - inTime} ms`) // 停车时长
    }
}

//测试
// 初始化数据
// 初始化题目中停车场的3层，每层100个车位
const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i + 1, places)
}

// 初始化停车场
const park = new Park(floors)

// 初始化进出的车辆
const car1 = new Car('No.01')
const car2 = new Car('No.02')
const car3 = new Car('No.03')

// 模拟车辆进出
console.log('第一辆车进入')
console.log(park.emptyNum()) //进入前，先显示停车场的每层空车位信息
park.in(car1) // 进入

console.log('第二辆车进入')
console.log(park.emptyNum()) //进入前，先显示停车场的每层空车位信息
park.in(car2) // 进入

console.log('第一辆车离开')
park.out(car1) // 离开
console.log('第二辆车离开')
park.out(car2) // 离开

console.log('第三辆车进入')
console.log(park.emptyNum()) //进入前，先显示停车场的每层空车位信息
park.in(car3) // 进入
console.log('第三辆车离开')
park.out(car3) // 离开