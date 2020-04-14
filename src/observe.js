//主题，保存状态，状态改变之后触发所有观察者对象
class Subject {
    constructor(){
        this.state = 0
        this.observers = []
    }
    //获取状态
    getState(){
        return this.state
    }
    //设置状态
    setState(state){
        if(this.state !== state){
            this.state = state;
            this.notifyAllObservers()
        }
    }
    //通知所有订阅者
    notifyAllObservers(){
        this.observers.forEach(observer=>{
            observer.update()
        })
    }
    //添加新的订阅者
    attach(observer){
        this.observers.push(observer)
    }
}

//观察者
class Observer{
    constructor(name, subject){
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update(){
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

//测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)