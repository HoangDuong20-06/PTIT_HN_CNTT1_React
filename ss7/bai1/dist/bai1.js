"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`
            Tên nhân viên: ${this.name}
            Công ty: ${this.company}
            Số điện thoai: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
const emp = new Employee("Dương", "DEV", "09018911");
const manager = new Manager(3, "Dev", "VNG", "09123456");
console.log(emp);
console.log(manager);
