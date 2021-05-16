import {
    removeButton
} from "./removeButton.js"
import memory from "../memory.js";
export function addPart(event)
  { 
    event.preventDefault();
    let propertycontainer=document.querySelector(".parts-add-content");
    let propertyentry=document.createElement("div");
    propertyentry.setAttribute("class","add-content");
    propertycontainer.appendChild(propertyentry);
    let partsname=document.createElement("select");
    partsname.setAttribute("class","parts-partname");
    for(let i in memory.app_data){
     let option = document.createElement("option");
     option.text = memory.app_data[i].unitname;
     partsname.add(option);
    }
    propertyentry.appendChild(partsname);
    let partname=document.createElement("input");
    partname.setAttribute("type","checkbox");
    partname.setAttribute("class","parts-name");
    partname.innerText="8";
    propertyentry.appendChild(partname);
    let propertyname=document.createElement("input");
    propertyname.setAttribute("type","checkbox");
    propertyname.setAttribute("class","parts-default");
    propertyentry.appendChild(propertyname);
    let deletebutton=document.createElement("i");
    deletebutton.setAttribute("class","fas fa-trash delete-button");
    deletebutton.addEventListener("click",removeButton);
    propertyentry.appendChild(deletebutton);
  }