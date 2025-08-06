"use strict";
let num1 = 10;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
num3 = num1 + num2;
console.log(`Cộng: ${num1} + ${num2} = ${num3}`);
num3 = num1 - num2;
console.log(`Trừ: ${num1} - ${num2} = ${num3}`);
num3 = num1 * num2;
console.log(`Nhân: ${num1} * ${num2} = ${num3}`);
num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);
let result = num4 + num5;
console.log(`Kết quả của "${num4}" + ${num5} là: ${result}`);
// num4 là chuỗi: "10"
// num5 là boolean: true
// Khi dùng dấu +, JavaScript/TypeScript sẽ ép kiểu true thành "true" (string) => "10" + "true" = "10true"