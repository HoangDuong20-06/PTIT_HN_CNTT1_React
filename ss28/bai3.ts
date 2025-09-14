type process = (value: number, index: number) => void;
function processArray(arr: number[], callback: process): void {
  arr.forEach((item, index) => {
    setTimeout(() => {
      callback(item, index);
    }, 1000 * (index + 1));
  });
}
const numbers: number[] = [1, 2, 3, 4, 5];

processArray(numbers, (value, index) => {
  console.log(`Phần tử thứ ${index + 1}: ${value}`);
});
