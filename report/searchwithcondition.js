import memory from "../memory.js";
import {
    checkDate
} from "./checkDate.js";

export function searchWithType(typeData)
 {  let  typeReport= new Set();
    for(let item of memory.info) typeReport.add(item.type);
    for(let item2 of typeReport)
    {
        let option= document.createElement("option");
        option.innerText= item2;
        typeData.appendChild(option);
    }
}

export function searchWithStatus(statusData)
 {  let  statusReport= new Set();
    for(let item of memory.info) statusReport.add(item.status);
    for(let item2 of statusReport)
    {
        let option= document.createElement("option");
        option.innerText= item2;
        statusData.appendChild(option);
    }
}

export function searchCondition(item){
    let statusdata = document.querySelector(".status-product").value;
    let typeproductdata=document.querySelector(".type-product").value; 
   
    if ((item.status===statusdata ||statusdata==="Added")&&(item.type=== typeproductdata ||  typeproductdata==="All Units")&&(checkDate(item)===true))
       return true;
    return false;
}