type status = "active" | "banned";
class Account{
    id:string;
    userName:string;
    password:string;
    isLogin:boolean;
    role:string;
    constructor(id:string,userName:string,password:string,isLogin:boolean,role:string){
        this.id = id;
        this.userName  = userName;
        this.password  = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(){
        if(this.isLogin === false){

        }
    }
    logout(){
        if(this.isLogin === true){
            console.log(`Đăng xuất thành công`)
        }
    }
}
class userAccount extends Account{
    status:status;
    constructor(status:status,id:string,userName:string,password:string,isLogin:boolean,role:string){
        super(id,userName,password,isLogin,role);
        this.status = status;
    }
    login(): void {
        if(this.status === "banned"){
            console.log("Tài khoản đã bị khóa")
        }
    }
}
const test = new Account("1","Dương","123456",true,"user");
const user = new userAccount("banned","1","Dương","12345",false,"user");
test.logout();
user.login();