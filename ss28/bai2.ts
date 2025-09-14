type delayType = (delay:number) => void;
const delayedCallback = (a:number,callback:delayType) =>{
     setTimeout(() => {
        callback(a);
    }, a);
}
const handleLog = (delay:number) => {
    console.log(delay)
}
delayedCallback(10000,handleLog)