const phoneBooks = [
];
const addContact = (name, phone, email) => {
    phoneBooks.push({ name, phone, email });
};
const displayContact = (phoneBooks) => {
    phoneBooks.forEach(element => {
        console.log(element);
    });
}
addContact("duong","0904018911","Duong@gmail.com");
addContact("duong","0904018911","Duong@gmail.com");
addContact("duong","0904018911","Duong@gmail.com");
addContact("duong","0904018911","Duong@gmail.com");
displayContact(phoneBooks);