let input: (string | number | boolean);
input = true;
const processInput = (input:string|number|boolean) => {
    if(typeof input === "boolean"){
        if(input === true){
            console.log("Giá trị là true - tiến hành xử lý");
        }else{
            console.log("Giá trị là false - dừng xử lý")
        }
    }
    if(typeof input === "number"){
        if (input < 2) {
        console.log("Không phải số nguyên tố");
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Là số nguyên tố");
    } else {
        console.log("Không phải số nguyên tố");
    }
    }
    if(typeof input === "string"){
        let isAllDigits = true;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < '0' || input[i] > '9') {
                isAllDigits = false;
                break;
            }
        }

        if (isAllDigits) {
            const num = Number(input);
            console.log(num * num);
        } else {
            let letterCount = 0;
            for (let i = 0; i < input.length; i++) {
                const char = input[i];
                if (
                    (char >= 'A' && char <= 'Z') ||
                    (char >= 'a' && char <= 'z')
                ) {
                    letterCount++;
                }
            }
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    };
processInput(input);