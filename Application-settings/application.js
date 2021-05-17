import memory from "../memory.js";
import {
  searchedData
} from "./searchedData.js";
import {
  callData
} from "../utility.js";
import{
  addNewUnit
} from "./addNewUnit.js"
import{
  addProperty
} from "./addProperty.js";
import{
  addPart
} from "./addPart.js";
import{
 saveButton
} from "./saveButton.js";
import{
  debounce
} from "../utility.js"
import{
  showProperty
} from "./showProperty.js";
import{
  onClickHighlight
} from "./onClickHighlight.js";
import{
  openSearchBox
} from "./openSearchBox.js";
import 
{ backButton } from "./backButton.js";

callData("./InventoryDB_Server/data/setting.json").then((response) =>
//callData("https://inventoryapp-90f3.restdb.io/rest/unittypes").then((response) =>
{   memory.app_data=response;
    const load= document.querySelector(".loading-settings");
    load.style.display= "none";
    for (let item in memory.app_data) {
      let nametext = document.createElement("span");
      let lielement = document.createElement("li");
      lielement.appendChild(nametext);
      let divsection= document.querySelector(".resources-list");
      divsection.appendChild(lielement);
      lielement.setAttribute("class", "resources-list-element");
      nametext.setAttribute("class", "resources-list-element-name");
      nametext.innerText = memory.app_data[item].unitname;
      lielement.addEventListener("click", showProperty);
      lielement.addEventListener("click", onClickHighlight);
      }
    });
    const search_box_value = document.querySelector(".search-box");
    search_box_value.addEventListener("keyup", debounce(searchedData,300));

    const new_entry = document.querySelector(".add-new-unit");
    new_entry.addEventListener("click", addNewUnit);

    const save_btn = document.querySelector(".save-data");
    save_btn.addEventListener("click",saveButton);

    const property_button=document.querySelector(".property-add");
    property_button.addEventListener("click",addProperty);

    const part_button=document.querySelector(".part-add");
    part_button.addEventListener("click",addPart);

    const search_button=document.querySelector(".search-button");
    search_button.addEventListener("click",openSearchBox);
    
    const empty_span=document.createElement("span");
    const list_container=document.querySelector(".resources-list");
    empty_span.innerText="No Results Found";
    empty_span.setAttribute("class","no_results");
    empty_span.style.display='none';
    list_container.appendChild(empty_span);

    let back_button=document.querySelector(".back-button");
    back_button.addEventListener("click",backButton);

    window.onresize = function()
    {
      if(window.matchMedia("(min-width: 480px)").matches){
       let search_button=document.querySelector(".search-button");
       let new_unit_button=document.querySelector(".add-new-unit");
       let search_box=document.querySelector(".search-box");
       search_box.style.display="block";
       search_button.style.display="block";
       new_unit_button.style.display="block";
       let form_container=document.querySelector(".edit-resource");
       form_container.style.width="80%";
       let resource_list=document.querySelector(".resources");
       resource_list.style.width="18%";
       let back_button=document.querySelector(".back-button");
       back_button.style.display="none";
    }

    if(window.matchMedia("(max-width: 480px)").matches)
    {
        let search_box=document.querySelector(".search-box");
        search_box.style.display="none";
        let form_container=document.querySelector(".edit-resource");
        form_container.style.width="70%";
        let resource_list=document.querySelector(".resources");
        resource_list.style.width="30%";
      }
    }





