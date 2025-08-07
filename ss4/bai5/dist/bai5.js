"use strict";
const staffMemeber = {
    name: "Duong",
    age: 19,
    employeed: "EMP001",
    department: "IT"
};
const printfStaffInfor = (staff) => {
    console.log(`Nhân viên: ${staff.name}(${staff.age}), Mã nhân viên: ${staff.employeed} - Phòng:${staff.department}`);
};
printfStaffInfor(staffMemeber);
