type ForEachCallback<T> = (value: T, index: number, array: T[]) => void;

function myForEach<T>(arr: T[], callback: ForEachCallback<T>): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (value, index, array) => {
  console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng: [${array.join(", ")}]`);
});