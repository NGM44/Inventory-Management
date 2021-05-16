import memory from "../memory.js";
import { displayReport } from "./dispalyReport.js";



import {  searchCondition } from "./searchWithCondition.js";

export function enterInfo() {
    let count = 0;
    for (let item of memory.info) {
        if (searchCondition(item) == true) {
            count += 1;
            displayReport(item);
        }
    }
    let countDiv = document.querySelector(".count");
    countDiv.innerText = count;
    displayNothing(count);

}
function displayNothing(count){
    if(count===0){
    let biglist= document.querySelector(".biglist-report");    
    let card= document.createElement("div");
    card.setAttribute('class', "nothing");
    let nothingTxt= document.createElement("p");
    nothingTxt="Nothing Here";
    card.append(nothingTxt);
    biglist.append(card);
}
}



