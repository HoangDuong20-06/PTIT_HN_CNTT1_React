"use strict";
function parseToNumber(value) {
    const num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA + numB;
}
function subtract(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA - numB;
}
function multiply(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) {
        return "Tham số không hợp lệ";
    }
    return numA * numB;
}
function divide(a, b) {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null || numB === 0) {
        return "Tham số không hợp lệ hoặc chia cho 0";
    }
    return numA / numB;
}
console.log(add("10", 5));
console.log(subtract("20", "a"));
console.log(multiply(3, "7"));
console.log(divide("100", "0"));
