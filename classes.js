class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `{this.name} is eating`;
    }
    iscute(){
        return this.age<=1?1:0;
    }
}
const animal1 = new Animal("tom",1);
console.log(animal1);