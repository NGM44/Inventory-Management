import {
    callData,
    menuslide
} from "../utility.js";
import {
    addSlide,
    removeSlide
} from "./addUnitSlider.js";
import {
    enterData
} from "./dataEntry.js";
import {
    closeEditslide
} from "./closeEdit.js";
import {
    validate
} from "./validate.js";
import {
    searchItem
} from "./searchItem.js";
import {
    refreshData
} from "./refreshData.js";
import {
    assignedToSelectPopulation
} from "./assignedToSelectPopulation.js";
import memory from "../memory.js";


//Sliding Mechanism for Add Unit component.

let addunitbtn = document.querySelector(".add-unit-btn");
addunitbtn.addEventListener('click', addSlide);

let cancelUnitbtn = document.querySelectorAll(".cancel-unit");
for (let i of cancelUnitbtn) i.addEventListener('click', removeSlide);

//On smaller devices, handling on click of menuicon.

let menuicon = document.querySelector(".menu-icon");
menuicon.addEventListener('click', menuslide);
memory.menuiconclicked = false;

//Data entry into the browser.

//callData("./InventoryDB_Server/data/units.json").then((response) => {
callData("https://inventoryapp-90f3.restdb.io/rest/units").then((response) => {
    memory.data = response;
    memory.load = document.querySelector(".loading");
    memory.load.style.display = "none";
    let newData = false;
    for (let item of memory.data) enterData(item, newData);

    // Populating the select inputfield for new unit form.
    assignedToSelectPopulation();
});

// Closing the Edit slide with cancel button

let closeEdit = document.querySelector(".closeEdit");
closeEdit.addEventListener('click', closeEditslide);

// Form validate and data entry in DOM

let save = document.getElementById("saveBtn");
save.addEventListener('click', validate);

// Search Item

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener('click', searchItem);

// Refresh Button Implementation

let refresh = document.querySelector(".refresh-btn");
refresh.addEventListener('click', refreshData);