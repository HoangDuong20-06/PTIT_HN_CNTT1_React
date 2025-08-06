let a: string = "2";
let b: number = 2;

// So sánh lỏng (==): tự động ép kiểu, nên "2" == 2 => true
console.log(a == b); // true

// So sánh chặt (===): so sánh cả giá trị và kiểu dữ liệu => "2" !== 2
console.log(a === b); // false

// == chỉ so sánh giá trị, nên "2" sẽ được ép kiểu thành số 2 => true
// === so sánh cả kiểu dữ liệu và giá trị => string !== number => false