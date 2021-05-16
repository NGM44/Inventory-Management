import memory from "../memory.js";
import { callData } from "../utility.js";
import { enterData } from "./dataEntry.js";
import { assignedToSelectPopulation } from "./assignedToSelectPopulation.js";

export function refreshData()
{
    let biglist= document.querySelector(".biglist");
    biglist.innerHTML="";
    memory.load.style.display = "flex";
    biglist.appendChild(memory.load);
    
    callData("https://inventoryapp-90f3.restdb.io/rest/units").then((response) => 
    {
        memory.data = response;
        memory.load.style.display = "none";
        let newData = false;
        for (let item of memory.data) enterData(item, newData);

        // Populating the select inputfield for new unit form.
        assignedToSelectPopulation();
    });
}