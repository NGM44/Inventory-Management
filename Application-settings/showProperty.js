import{
    removeButton
} from "./removeButton.js";
import memory from "../memory.js";
export function showProperty(event) {
    let element=(event.target.innerText);
    for(let iter in memory.app_data){
    if(memory.app_data[iter].unitname===element){
      let namevalue=document.getElementById("name");
      let snamevalue=document.getElementById("sname");
      let commentvalue=document.getElementById("comments");
      namevalue.value=memory.app_data[iter].unitname;
      snamevalue.value=memory.app_data[iter].shortname;
      commentvalue.value=memory.app_data[iter].comments;
    }}
    let propertycontainer = document.querySelector(".properties-add-content");
    let propertylist = [];
    propertycontainer.innerHTML = "";
    for (let item in memory.app_data) {
      if (memory.app_data[item].properties !=="")
        propertylist.push(memory.app_data[item].properties);
    }
    for (let iter of propertylist) {
      for (let iterj in iter) {
        let propertyentry = document.createElement("div");
        propertyentry.setAttribute("class", "add-content");
        propertycontainer.appendChild(propertyentry);
        let label = document.createElement("span");
        label.setAttribute("class", "properties-label input-text");
        label.innerText = iter[iterj];
        propertyentry.appendChild(label);
        let propertydefault= document.createElement("span");
        propertydefault.setAttribute("class", "properties-default");
        propertydefault.innerText = "8";
        propertyentry.appendChild(propertydefault);
        let propertyname = document.createElement("input");
        propertyname.setAttribute("type", "checkbox");
        propertyname.setAttribute("class", "properties-name check-boxes");
        propertyentry.appendChild(propertyname);
        let propertyrequired = document.createElement("input");
        propertyrequired.setAttribute("type", "checkbox");
        propertyrequired.setAttribute("class", "properties-required check-boxes");
        propertyentry.appendChild(propertyrequired);
        let deletebutton = document.createElement("i");
        deletebutton.setAttribute("class", "fas fa-trash delete-button");
        deletebutton.addEventListener("click", removeButton);
        propertyentry.appendChild(deletebutton);
      }
    }
  }