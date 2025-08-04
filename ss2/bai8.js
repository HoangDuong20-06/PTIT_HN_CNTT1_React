const user = {
    name: "Jonh",
    age:25,
    location:{
        city:"Ha noi",
        country:"Viet nam",
    },
    contact:{
        email:"jonh@gmail.com",
        phone:"0912345678"
    },
    job:{
        title:"Dev",
        company:"Tech corp"
    }
}
const displayUserInfo = (user) =>{
     const { name, age, location, contact, job } = user;
    const city = location && location.city ? location.city : "unknown";
    const country = location && location.country ? location.country : "unknown";
    const title = job && job.title ? job.title : "unknown";
    const company = job && job.company ? job.company : "unknown";
    const phone = contact && contact.phone ? contact.phone : "unknown";
    const email = contact && contact.email ? contact.email : "unknown";
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`);
}
displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } });