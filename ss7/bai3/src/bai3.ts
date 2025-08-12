abstract class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract makeNoise():void;
    printName():void{
        console.log(`${this.name}`)
    }
}
class Cat extends Animal{
    printName(): void {
        console.log("Cat");
    }
    makeNoise(): void {
        console.log("Meo meo");
    }
}
class Dog extends Animal{
    printName(): void {
        console.log("Dog");   
    }
    makeNoise(): void {
        console.log("Gâu gâu");
    }
}
const cat = new Cat("Cat");
const dog = new Dog("Dog");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();