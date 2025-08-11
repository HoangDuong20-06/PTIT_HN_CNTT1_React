"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    removeStudent(id) {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]); // Thêm lại vào allStudents
            this.students.splice(index, 1); // Xóa khỏi lớp
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} để chỉnh sửa.`);
        }
    }
}
allStudents.push(new Student(1, "Dương"), new Student(2, "An"), new Student(3, "Huy"), new Student(4, "Chung"), new Student(5, "Thành"), new Student(6, "Hà"));
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("=== Trước khi thay đổi ===");
class1.showStudents();
class2.showStudents();
class1.removeStudent(2);
class2.editStudent(5, "LB");
console.log("\n=== Sau khi thay đổi ===");
class1.showStudents();
class2.showStudents();
