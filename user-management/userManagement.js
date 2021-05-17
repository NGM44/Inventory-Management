import memory from "../memory.js";
import { callData } from "../utility.js";
import { getUserList} from "./getUserList.js";
import { formPopUp } from "./edit.js";
import {refreshData, search} from "./search.js"
callData("./InventoryDB_Server/data/users.json").then((response) => {
//callData("https://inventoryapp-90f3.restdb.io/rest/userunits").then((response) => {
    memory.userData = response;
    getUserList();
});

memory.matches=[];
memory.userList = document.getElementById('persons');
memory.component = document.getElementById('components');
memory.editFormButton = document.getElementById('edit-form');
memory.editFormButton.addEventListener('click',formPopUp);
memory.saveButton = document.createElement('button');
memory.saveButton.setAttribute('class','save');
memory.saveButton.innerHTML = 'SAVE';
memory.cancelButton = document.createElement('button');
memory.cancelButton.setAttribute('class','cancel');
memory.cancelButton.innerHTML = 'CANCEL';
memory.refreshButton = document.getElementById('refresh-button');
memory.refreshButton.addEventListener('click', refreshData);
memory.searchButton = document.querySelector('#search-button');
memory.searchButton.addEventListener('click',search);


let screen1 = document.querySelector('.user-container');
let screen2 = document.querySelector('.tool-description');

function mobileView(){
    const screenWidth= window.matchMedia("(max-width: 768px)");    
    if(screenWidth.matches){
        console.log('mobile viewport found');
        screen1.style.width="100%";
        screen2.style.width="0%";
        let listItems = document.querySelectorAll('.user-container-list-ele');
        console.log(listItems);
        for(let item of listItems){
            item.addEventListener('click',secondScreen, false);
        }
        //listItems.addEventListener('click',secondScreen);
    }
}

function secondScreen(){
    screen1.style.display = "none";
    screen2.style.display = "block";
    screen2.style.width="100%";
}

mobileView();