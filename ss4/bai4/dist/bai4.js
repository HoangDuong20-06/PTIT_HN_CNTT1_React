"use strict";
let variable;
variable = 10;
const dieuKien = (variable) => {
    if (typeof variable === "number") {
        if (variable % 2 == 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
    if (typeof variable === "string") {
        console.log(`${variable.length} ký tự`);
        return variable.length;
    }
};
dieuKien(variable);
