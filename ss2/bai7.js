const fomatDate = (currentDate) =>{
    const today = new Date(currentDate);
    let day = today.getDate();
    if(day> 0&& day<10){
        day = `0${day}`;
    }
    let month = today.getMonth() + 1;
    if(month>0 && month<10){
        month = `0${month}`;
    }
    let year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

export default fomatDate;