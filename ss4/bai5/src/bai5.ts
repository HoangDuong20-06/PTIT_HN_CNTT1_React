interface Person {
    name:string;
    age:number;
}
interface Employee {
    employeed:string;
    department:string;
}
type StaffMember = Person & Employee;
const staffMemeber : StaffMember = {
    name:"Duong",
    age:19,
    employeed:"EMP001",
    department:"IT"
}
const printfStaffInfor = (staff:StaffMember) => {
    console.log(`Nhân viên: ${staff.name}(${staff.age}), Mã nhân viên: ${staff.employeed} - Phòng:${staff.department}`)
}
printfStaffInfor(staffMemeber);