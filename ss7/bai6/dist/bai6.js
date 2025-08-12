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
class adminAcc extends Account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(id, user) {
        const users = user.find(u => u.id === id);
        if (users) {
            users.status = "banned";
            console.log(`Người dùng ${users.userName} đã bị ban`);
        }
        else {
            console.log(`Không tìm thấy người dùng với id ${id}`);
        }
    }
}
const test = new Account("1", "Dương", "123456", true, "user");
const user = new userAccount("banned", "1", "Dương", "12345", false, "user");
const user2 = new userAccount("banned", "2", "An", "12345", false, "user");
const admin = new adminAcc("1", "Dev", "12345", false, "admin");
test.logout();
user.login();
admin.banUser("2", [user, user2]);
