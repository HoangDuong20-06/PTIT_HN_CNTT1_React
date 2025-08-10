class Student {
    id:number;
    age:number;
    email:string;
    constructor(id:number,age:number,email:string){
        this.id=id;
        this.age=age;
        this.email=email;
    }
}
const student:Student[] = [
    {id:1,age:19,email:"duong@gmail.com"},
    {id:2,age:19,email:"duong@gmail.com"}
]
const printInfo = (student:Student[]) =>{
    for(let i =0;i<student.length;i++){
        console.log(`${student[i].id},${student[i].age},${student[i].email}`)
    }
}
printInfo(student);