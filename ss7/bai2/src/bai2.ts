class Vehicle{
    protected id:string;
    protected name:string;
    protected speed:number;
    constructor(id:string,name:string,speed:number){
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    public slowDown(amount:number):void{
        this.speed -= amount;
        console.log(`Giảm tốc độ đi ${amount} km`)
        if(this.speed < 0){
            this.speed = 0;
            console.log(`Tốc độ bằng 0`);
        }
    }
    public speedUp (amount:number):void{
        this.speed += amount;
        console.log(`Tăng tốc độ thêm ${amount} km`)
    }
    public showSpeed ():void{
        console.log(`Tốc độ hiện tại: ${this.speed}`)
    }
}
class Bicycle extends Vehicle{
    private gear:number;
    constructor(gear:number,id:string,name:string,speed:number){
        super(id,name,speed);
        this.gear = gear;
    }
}
const speed = new Bicycle(3,"M1","Tsunami",100);
speed.speedUp(20);
speed.showSpeed();
speed.slowDown(10);
speed.showSpeed();