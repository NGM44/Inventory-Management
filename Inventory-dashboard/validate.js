import memory from "../memory.js";
import {
    enterData
} from "./dataEntry.js";


export function validate() {
    let fname = document.getElementById("item-name").value.toString();
    let serial = document.getElementById("serial").value.toString();
    let status = document.getElementById("item-status").value.toString();
    let assignedto = document.getElementById("assigned-to").value.toString();
    let type = document.getElementById("type").value.toString();
    let date = document.getElementById("date").value;
    let id= document.getElementById("item-id").value.toString();

    let insertDate= new Date(date);
    insertDate= `${insertDate.getDate()} ${insertDate.toLocaleString('en-us',{month:'long'})} ${insertDate.getFullYear()}`;

    if(fname=="" || serial=="" || status=="" || assignedto=="" || type=="" || date=="" || id=="")
    {
        let formError= document.querySelectorAll(".form-error");
        for(let item of formError) item.style.display="inline-block";
        
    }
    else
    {
        let formError= document.querySelectorAll(".form-error");
        for(let item of formError) item.style.display="none";
        let insItem = {
            name: fname,
            serial: serial,
            type: type,
            from: insertDate,
            assignedto: assignedto,
            status: status,
            id: id
        }

        memory.data.push(insItem);
        let newData=true;
        enterData(insItem, newData);
        
        $.ajax({

            //url: "./InventoryDB_Server/data/units.json"
            url: 'https://inventoryapp-90f3.restdb.io/rest/units',
            data: insItem,
            type: 'POST',
            headers: {
                "x-apikey": "603a2c3f10f29b640ed97b6a",
            },
        });
    }
}