import memory from "../memory.js";
import { enterData } from "./dataEntry.js";
import {debounce} from "../utility.js";

export function searchItem()
{
    let backBtn= document.createElement("button");
    backBtn.innerHTML= `<i class="fas fa-arrow-left"></i>`;
    backBtn.setAttribute("class","searchBackBtn");
    let searchText= document.createElement("input");
    searchText.setAttribute('id',"search-field")
    let leftside= document.querySelector(".leftside");
    leftside.innerHTML="";
    searchText.placeholder="Enter data Here";
    leftside.appendChild(backBtn);
    leftside.appendChild(searchText);
    searchText.addEventListener('focus', function()
    {
        searchText.style.border= "2px solid #1ca1c1";
    });
    searchText.focus();

    searchText.addEventListener('keyup', debounce(getFilteredData,300));
    backBtn.addEventListener('click', function()
    {
        leftside.innerHTML="All Units";
        let biglist= document.querySelector(".biglist");
        biglist.innerHTML= "";
        for(let item of memory.data) enterData(item);
    });
}

function getFilteredData()
{
    let searchItem= document.getElementById("search-field").value;
    searchItem= searchItem.toLowerCase();
    let arr= new Set();
    for(let item of memory.data)
    {
        let temp= item.name.toLowerCase();
        if(temp.includes(searchItem)) arr.add(item);
    }

    for(let item of memory.data)
    {
        let temp= item.type.toLowerCase();
        if(temp.includes(searchItem)) arr.add(item);
    }

    let biglist= document.querySelector(".biglist");
    biglist.innerHTML="";
    let nothing= document.createElement("div");
    nothing.setAttribute("class","nothing");
    nothing.innerHTML= "Not Found";
    if(arr.size==0)
    {
        biglist.appendChild(nothing);
    }
    for(let item of arr)
    {
        enterData(item);
    }
}