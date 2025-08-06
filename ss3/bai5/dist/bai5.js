"use strict";
let firstName = "john";
let lastName = "doe";
function capitalize(str) {
    if (!str)
        return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
