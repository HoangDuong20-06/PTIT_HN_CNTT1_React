"use strict";
class Account {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`+ ${amount} VND`);
        console.log(`Nạp ${amount} VND thành công`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Số dư không đủ");
        }
        else {
            this.balance -= amount;
            this.history.push(`- ${amount} VND`);
            console.log(`Rút ${amount} VND thành công`);
        }
    }
    showHistory() {
        console.log("Lịch sử giao dịch:");
        this.history.forEach(iteam => console.log(iteam));
    }
}
class SavingAccount extends Account {
    constructor(interestRate, accountNumber, balance, history, status) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Số dư không đủ");
        }
        else if (this.balance = 0) {
            console.log("Tài khoản đã hết tiền");
        }
    }
}
class CheckingAccount extends Account {
    constructor(overdraftLimit, accountNumber, balance, history, status) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if ((this.balance - amount) * (-1) > this.overdraftLimit) {
            console.log("Vượt quá hạn mức");
        }
        else {
            this.balance -= amount;
            this.history.push(`- ${amount} VND`);
        }
    }
}
const account = new Account("Dương", 100000000, [], "active");
const checking = new CheckingAccount(100, "Dương", 1000000, [], "active");
account.deposit(300000);
account.withdraw(200000);
account.showHistory();
checking.withdraw(1000200);
checking.showHistory();
