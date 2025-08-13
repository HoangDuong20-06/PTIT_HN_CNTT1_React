function FirstDivisible<T extends number>(arr: T[]): T | undefined {
    return arr.find(item => item % 2 === 0);
}
console.log(FirstDivisible([1, 3, 5, 10])); 
console.log(FirstDivisible([1, 3, 5]));        
