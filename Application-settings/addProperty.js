import {
  removeButton
} from "./removeButton.js"
export function addProperty(event)
  { 
    event.preventDefault();
    let propertycontainer=document.querySelector(".properties-add-content");
    let propertyentry=document.createElement("div");
    propertyentry.setAttribute("class","add-content");
    propertycontainer.appendChild(propertyentry);
    let label=document.createElement("input");
    label.setAttribute("type","text");
    label.setAttribute("class","properties-label");
    label.innerText="";
    propertyentry.appendChild(label);
    let propertydefault=document.createElement("span");
    propertydefault.setAttribute("class","properties-default");
    propertydefault.innerText="8";
    propertyentry.appendChild(propertydefault);
    let propertyname=document.createElement("input");
    propertyname.setAttribute("type","checkbox");
    propertyname.setAttribute("class","properties-name");
    propertyentry.appendChild(propertyname);
    let propertyrequired=document.createElement("input");
    propertyrequired.setAttribute("type","checkbox");
    propertyrequired.setAttribute("class","properties-required");
    propertyentry.appendChild(propertyrequired);
    let deletebutton=document.createElement("i");
    deletebutton.setAttribute("class","fas fa-trash delete-button");
    deletebutton.addEventListener("click",removeButton);
    propertyentry.appendChild(deletebutton);
  }
