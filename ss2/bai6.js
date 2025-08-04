const checkEndString = (string, end) => {
    if (string.endsWith(end)) {
        console.log("True");
    } else {
        console.log("False");
    }
};
checkEndString("Hello, World!", "World!");
checkEndString("Hello, World!", "Hello");