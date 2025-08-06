const username : string = "Duong";
const age : number = 19;
const job : string = "Dev";
const showInfor = (username:string,age:number,job:string) =>{
    document.write(`Username: ${username} <br>`);
    document.write(`Age: ${age}<br>`);
    document.write(`Job: ${job}<br>`);
}
showInfor(username,age,job);