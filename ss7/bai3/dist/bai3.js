"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    printName() {
        console.log("Cat");
    }
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    printName() {
        console.log("Dog");
    }
    makeNoise() {
        console.log("Gâu gâu");
    }
}
const cat = new Cat("Cat");
const dog = new Dog("Dog");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
