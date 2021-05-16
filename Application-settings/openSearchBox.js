import{
    debounce
  } from "../utility.js";
import {
    searchedData
  } from "./searchedData.js";
export function openSearchBox(){
    let search_box=document.querySelector("#search-ok");
    let search_button=document.querySelector(".search-button");
    let new_unit_button=document.querySelector(".add-new-unit");
    if(window.matchMedia("(max-width: 768px)").matches)
    {
    search_box.style.display="block";
    search_box.style.width="110%";
    search_button.style.display="none";
    new_unit_button.style.display="none";
    let back_button= document.querySelector(".back-button");
    back_button.style.display="block";
    }
    else{
    debounce(searchedData,300);
    }
}