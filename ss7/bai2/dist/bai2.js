"use strict";
class Vehicle {
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log(`Giảm tốc độ đi ${amount} km`);
        if (this.speed < 0) {
            this.speed = 0;
            console.log(`Tốc độ bằng 0`);
        }
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc độ thêm ${amount} km`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(gear, id, name, speed) {
        super(id, name, speed);
        this.gear = gear;
    }
}
const speed = new Bicycle(3, "M1", "Tsunami", 100);
speed.speedUp(20);
speed.showSpeed();
speed.slowDown(10);
speed.showSpeed();
