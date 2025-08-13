function findLongestUniqueWord<T extends string>(sentence: T): string | undefined {
    const words = sentence.split(" ");
    let longestWord = "";
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        const charSet = new Set(lowerWord);

        if (charSet.size === lowerWord.length && word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord || undefined;
}
console.log(findLongestUniqueWord("hello world apple banana orange pumpkin cucumber"));