const student = {
    name:"Dev",
    age:20,
    listMonHoc:[
        {subject:"Math",score:9},
        {subject:"English",score:7.5},
        {subject:"Physics",score:6},
        {subject:"Literature",score:8.5}
    ]
}
const getStudentSummary = (student) =>{
    const{name,age,listMonHoc} = student;
    let total = student.listMonHoc.reduce((a, b)=> a+b.score,0)
    let avage = total/student.listMonHoc.length;
    let rank;
    if (avage >= 8.5){
        rank = `Học sinh giỏi`;
    }else if(avage >= 7){
        rank = `Học sinh khá`;
    }else if(avage >= 5){
        rank = `Học sinh trung binh`;
    }else{
        rank = `Học sinh yếu`;
    }
    let bestSubject = listMonHoc.reduce((max, item) => item.score > max.score ? item : max);
    let worstSubject = listMonHoc.reduce((min, item) => item.score < min.score ? item : min);
    console.log(`
        ${name} is ${age} years old
        Average score: ${avage} -> ${rank}
        Best subject: ${bestSubject.subject} ${bestSubject.score}
        Weakest subject: ${worstSubject.subject} ${worstSubject.score}`);
}
getStudentSummary(student)