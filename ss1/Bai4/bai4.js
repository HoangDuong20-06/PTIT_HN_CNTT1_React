let n = "a";
function check(n){
    if(isNaN(n)){
        console.log(`${n} is not a number`);
    }else{
        if(n % 2 === 0){
            console.log(`${n} is an even number`);
    }else
        {
            console.log(`${n} is an odd number`);
        }
    }
}
check(n);