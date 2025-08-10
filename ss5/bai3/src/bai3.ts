class Employee {
    public name: string;
    protected company: string;
    private phone: string | number;
    constructor(name: string, company: string, phone: string | number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
const employee = new Employee("Dương", "Dev", "0123456789");
employee.printInfo();
