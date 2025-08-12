class Account {
    public accountNumber:string;
    protected balance:number;
    protected history:string[];
    protected status:string;
    constructor(accountNumber:string,balance:number,history:string[],status:string){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount:number){
        this.balance += amount
        this.history.push(`+ ${amount} VND`);
        console.log(`Nạp ${amount} VND thành công`);
    }
    withdraw(amount:number){
        if(amount>this.balance){
            console.log("Số dư không đủ")
        }else{
            this.balance -= amount
            this.history.push(`- ${amount} VND`)
            console.log(`Rút ${amount} VND thành công`);
        }
    }
    showHistory(){
        console.log("Lịch sử giao dịch:");
        this.history.forEach(iteam => console.log(iteam));
    }
}
class SavingAccount extends Account{
    interestRate:number;
    constructor(interestRate:number,accountNumber:string,balance:number,history:string[],status:string){
        super(accountNumber,balance,history,status);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        if(amount>this.balance){
            console.log("Số dư không đủ")
        }else if(this.balance = 0){
            console.log("Tài khoản đã hết tiền")
        }
    }
}
class CheckingAccount extends Account{
    overdraftLimit:number;
    constructor(overdraftLimit:number,accountNumber:string,balance:number,history:string[],status:string){
        super(accountNumber,balance,history,status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number) {
        if((this.balance - amount) * (-1) > this.overdraftLimit){
            console.log("Vượt quá hạn mức");
        }else{
            this.balance -= amount
            this.history.push(`- ${amount} VND`);
        }
    }
}
const account = new Account("Dương",100000000,[],"active");
const checking = new CheckingAccount(100,"Dương",1000000,[],"active");
account.deposit(300000);
account.withdraw(200000);
account.showHistory();
checking.withdraw(1000200);
checking.showHistory();