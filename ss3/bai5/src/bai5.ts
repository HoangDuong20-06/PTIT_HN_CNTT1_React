let firstName: string = "john";
let lastName: string = "doe";
function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);