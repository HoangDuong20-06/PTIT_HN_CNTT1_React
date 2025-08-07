"use strict";
let student = {
    name: "Duong",
    age: 19,
    email: "hoanduong@gmail.com",
};
const printStudentInfo = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`);
};
printStudentInfo(student);
