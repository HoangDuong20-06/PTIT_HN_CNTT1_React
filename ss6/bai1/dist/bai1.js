"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, heigth) {
        super(name);
        this.width = width;
        this.height = heigth;
    }
    getSize() {
        return `Width:${this.width},Height:${this.height}`;
    }
}
const rect = new Rectangle("My Rectangle", 10, 5);
console.log(rect.getName());
console.log(rect.getSize());
