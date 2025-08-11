"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 3000 * this.workingHour;
    }
}
class Fulltime extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new PartimeJob(120);
const fulltime = new Fulltime();
console.log(`Lương part time: ${parttime.calculateSalary().toLocaleString()} VND`)
console.log(`Lương full time: ${fulltime.calculateSalary().toLocaleString()} VND`);
