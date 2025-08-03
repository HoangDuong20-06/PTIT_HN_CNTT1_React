function createUser(name, age = 18, role = "user") {
  const user = {
    name: name,
    age: age,
    role: role,
  };
  console.log(user);
}
createUser("Dev");
createUser("Duong",19,"admin");