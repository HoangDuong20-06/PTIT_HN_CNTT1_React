const respon = {
    data:{
        id:1,
        title:"Destructing in javascript",
        author: {
            name:"Dev",
            email:"Dev@gmail.com",
        },
    },
};
function extractData({ data: { title, author } }) {
    const { name: authorName, email: authorEmail } = author;
    console.log("Title :", title);
    console.log("Author :", author);
    console.log("AuthorName :", authorName);
    console.log("AuthorEmail :", authorEmail);
}
extractData(respon);