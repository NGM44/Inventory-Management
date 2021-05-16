import memory from "../memory.js";

export function assignedToSelectPopulation()
{
    let assignedSelect = document.getElementById("assigned-to");
    let assignedToarr = new Set();
    for (let item of memory.data) assignedToarr.add(item.assignedto);
    for (let item of assignedToarr) 
    {
        let opt = document.createElement("option");
        opt.innerText = item;
        assignedSelect.appendChild(opt);
    }

    let type = document.getElementById("type");
    let typearr = new Set();
    for (let item of memory.data) typearr.add(item.type);
    for (let item of typearr) 
    {
        let opt = document.createElement("option");
        opt.innerText = item;
        type.appendChild(opt);
    }
}