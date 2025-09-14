type FilterCallback<T> = (value: T, searchValue: T, array: T[]) => boolean;
function myFilter<T>(arr: T[], searchValue: T, callback: FilterCallback<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], searchValue, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const Numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
const found1 = myFilter(Numbers, 2, (value, searchValue) => value === searchValue);
console.log(found1);

const found2 = myFilter(Numbers, 10, (value, searchValue) => value === searchValue);
console.log(found2);