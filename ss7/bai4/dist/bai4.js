"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`
            ID sinh viên: ${this.id}
            Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(subject, name) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`
            Tên giáo viên: ${this.name}
            Tên môn học: ${this.subject}`);
    }
}
const student = new Student("1", "Dương");
const teacher = new Teacher("React", "Quí");
student.displayInfo();
teacher.displayInfo();
