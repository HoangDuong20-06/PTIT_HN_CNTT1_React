interface Student {
    name:string;
    age:number;
    email:string;
}
let student: Student = {
    name: "Duong",
    age:19,
    email:"hoanduong@gmail.com",
}
const printStudentInfo = (student:Student):void => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`);
}
printStudentInfo(student);
