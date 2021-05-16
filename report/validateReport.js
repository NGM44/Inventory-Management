export function validateReport(date1,date2) {
    let dateError= document.querySelector(".date-error");
    if(date1>date2)
    {
        dateError.style.display="inline-block";
    }
    else
    {
         dateError.style.display="none";
    }
}