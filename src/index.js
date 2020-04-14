class People{
    constructor(name, age){
        this.name = name
        this.age = age
        this.weight = 120
    }

    getWeight(){
        return this.weight
    }
}

class Student extends People {
    constructor(name, age, number){
        super(name, age)
        this.number = number
    }
}

let xiaoming = new Student('xiaoming',20);
alert(xiaoming.getWeight())