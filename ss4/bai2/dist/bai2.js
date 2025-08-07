"use strict";
let total = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let tong;
let diemtb;
for (let i = 0; i < total.length; i++) {
    tong = total.reduce((a, b) => a + b, 0);
    diemtb = tong / total.length;
}
console.log(diemtb === null || diemtb === void 0 ? void 0 : diemtb.toFixed(2));
