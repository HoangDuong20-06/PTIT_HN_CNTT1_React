const students = [
    {id:1,name:"Duong"},
    {id:2,name:"Toan"}
]
let array = students
array.forEach(students => {
    console.log(`Xin chào ${students.name}! Mã số: ${students.id}.`);
});