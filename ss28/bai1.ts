type calculateType = (result:number) => void;
const calculate = (a:number,b:number,callback:calculateType)=>{
    const sum = a+b;
    callback(sum);
}
const handleLog = (result:number):void => {
    console.log(result);
}
calculate(1,2,handleLog);