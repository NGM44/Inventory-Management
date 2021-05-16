import memory from "../memory.js";
import data_object from "../memory.js"
import { showProperty } from "./showProperty.js";
export function saveButton() {
    let is_present = false;
    let namevalue = document.getElementById("name");
    let snamevalue = document.getElementById("sname");
    let commentvalue = document.getElementById("comments");
    for (let i of memory.app_data) {
      if (i.unitname === namevalue.value) {
        is_present = true;
        i.unitname=namevalue.value;
        i.shortname=snamevalue.value;
        i.comments=commentvalue.value;
      }  
    }
    if(namevalue.value===""){
        alert("Name is a required Field");
    }
    else if(snamevalue.value===""){
        alert("Short name is a required field");
    }
    else if(!is_present && namevalue.value!=="") {
      
      data_object.unitname = namevalue.value;
      data_object.shortname = snamevalue.value;
      data_object.comments = commentvalue.value;
      memory.app_data.push(data_object);
      let nametext = document.createElement("span");
      let new_lielement = document.createElement("li");
      new_lielement.appendChild(nametext);
      let divsection = document.querySelector(".resources-list");
      divsection.prepend(new_lielement);
      new_lielement.setAttribute("class", "resources-list-element");
      nametext.setAttribute("class", "resources-list-element-name");
      nametext.innerText =data_object.unitname;
      new_lielement.addEventListener("click", showProperty);
  
    }
  }
  