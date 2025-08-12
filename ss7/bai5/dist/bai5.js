"use strict";
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        if (this.isLogin === false) {
        }
    }
    logout() {
        if (this.isLogin === true) {
            console.log(`Đăng xuất thành công`);
        }
    }
}
class userAccount extends Account {
    constructor(status, id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const test = new Account("1", "Dương", "123456", true, "user");
const user = new userAccount("banned", "1", "Dương", "12345", false, "user");
test.logout();
user.login();
