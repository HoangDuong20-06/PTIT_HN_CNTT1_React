type display = (value: number) => void;
function displayNumbers(callback: display, delay: number): void {
  let count = 1;

  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}
displayNumbers((value: number) => {
  console.log(`Số thứ tự: ${value}`);
}, 20);
