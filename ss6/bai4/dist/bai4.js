"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
const circle = new Circle(10);
const rectangle = new Rectangle(10, 5);
console.log(`Chu vi hình tròn:`, circle.calculatePerimeter().toFixed(2));
console.log(`Diện tích hình tròn:`, circle.calculateArea().toFixed(2));
console.log(`Chu vi hình chữ nhật:`, rectangle.calculatePerimeter());
console.log(`Diện tích hình chữ nhật:`, rectangle.calculateArea());
