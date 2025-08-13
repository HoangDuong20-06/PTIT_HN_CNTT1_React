function flatten<T>(arr: any[]): T[] {
    let result: T[] = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten<T>(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten<number>([1, [2, [3, 4], 5], 6]));