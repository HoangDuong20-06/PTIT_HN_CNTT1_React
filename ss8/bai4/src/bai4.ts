function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const person = { name: "Dương", age: 20 };
const job = { title: "Developer", salary: 1500 };
const merged = mergeObjects(person, job);
console.log(merged);