const checkElement = (arr, value) => {
    if (arr.includes(value)) {
        console.log("True");
    } else {
        console.log("False");
    }
};
checkElement([1, 2, 3, 4, 5], 3);
checkElement([1, 2, 3, 4, 5], 6);