let input: string = "hello world apple banana orange pumpkin cucumber";
function repeatWord(word: string): boolean {
    const seen = new Set();
    for (let char of word) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}
let words = input.split(" ");
let longestWord = "";
for (let word of words) {
    if (repeatWord(word) && word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(`Từ dài nhất không có ký tự trùng: "${longestWord}"`);