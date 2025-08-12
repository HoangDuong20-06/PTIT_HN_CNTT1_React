abstract class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract displayInfo():void;
}
class Student extends Person{
    id:string;
    constructor(id:string,name:string){
        super(name)
        this.id = id
    }
    displayInfo(): void {
        console.log(`
            ID sinh viên: ${this.id}
            Tên sinh viên: ${this.name}`)
    }
}
class Teacher extends Person{
    subject:string;
    constructor(subject:string,name:string){
        super(name);
        this.subject = subject
    }
    displayInfo(): void {
        console.log(`
            Tên giáo viên: ${this.name}
            Tên môn học: ${this.subject}`)
    }
}
const student = new Student("1","Dương");
const teacher = new Teacher("React","Quí");
student.displayInfo();
teacher.displayInfo();