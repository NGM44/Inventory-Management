import memory from "./memory.js";

export async function callData(url)
{
    try
    {
        let promise= await fetch(url,{
            headers:
            { 
                "x-apikey": "603a2c3f10f29b640ed97b6a",
                "content-type": "application/json",
            },
        });
        return promise.json();
    }
    catch(error)
    {
        console.log(error);
    }
}

export function menuslide()
{
    if(window.matchMedia("(max-width: 1024px)").matches && memory.menuiconclicked===false)
    {
        memory.menuiconclicked=true;
        let nav= document.querySelector(".tablet-view");
        let items= document.querySelector(".items-inventory");
        items.style.width= "100%";
        nav.style.width= "20%";
        nav.style.display= "block";
    }
    else if(window.matchMedia("(max-width: 1024px)").matches && memory.menuiconclicked==true)
    {
        memory.menuiconclicked=false;
        let nav= document.querySelector(".tablet-view");
        let items= document.querySelector(".items-inventory");
        items.style.width= "100%";
        nav.style.width= "0%";
        nav.style.display= "none";
    }
}

export function debounce(filterData, duration)
{
    let timer;
    return function()
    {
        clearTimeout(timer);
        timer= setTimeout(() => 
        {
            filterData();
        }, duration);
    }
}

// SPA implementation

let selectedModule= '0';
if(sessionStorage.getItem("cookie")) selectedModule= sessionStorage.getItem("cookie");

let selectedLi= '0';
if(sessionStorage.getItem("cookie")) selectedLi= sessionStorage.getItem("cookie");

let inventoryModule= document.querySelector(".nav-button-units");
inventoryModule.setAttribute('id',"0");
inventoryModule.addEventListener('click', display);


let userModule= document.querySelector(".nav-button-users");
userModule.setAttribute('id','1');
userModule.addEventListener('click', display);

let reportModule= document.querySelector(".nav-button-reports");
reportModule.setAttribute('id','2');
reportModule.addEventListener('click', display);

let settingModule= document.querySelector(".nav-button-settings");
settingModule.setAttribute('id','3');
settingModule.addEventListener('click', display);

let inventorybox= document.querySelector(".inventory-module");
let userbox= document.querySelector(".user-module");
let reportbox= document.querySelector(".report-module");
let settingbox= document.querySelector(".setting-module");


let toBeDisplayed;
let changeColor;

if(selectedModule==='0') toBeDisplayed= inventorybox;
else if(selectedModule==='1') toBeDisplayed= userbox;
else if(selectedModule==='2')  toBeDisplayed= reportbox;
else if(selectedModule==='3') toBeDisplayed= settingbox;

toBeDisplayed.style.display= "block";

if(selectedLi==='0') changeColor=inventoryModule;
else if(selectedLi==='1') changeColor=userModule;
else if(selectedLi==='2') changeColor=reportModule;
else if(selectedLi==='3') changeColor=settingModule;

changeColor.style.borderLeft= "3px solid #1ca1c1";
changeColor.style.backgroundColor= "#373a42";
changeColor.style.color= "#1ca1c1";


function display(event)
{
    let displayedBox;
    if(selectedModule==='0') displayedBox= inventorybox;
    else if(selectedModule==='1') displayedBox= userbox;
    else if(selectedModule==='2')  displayedBox= reportbox;
    else if(selectedModule==='3') displayedBox= settingbox;

    let taken= event.currentTarget.id;
    let nextBox;
    if(taken==='0') nextBox= inventorybox;
    else if(taken==='1') nextBox= userbox;
    else if(taken==='2') nextBox= reportbox;
    else if(taken==='3') nextBox= settingbox;

    selectedModule= taken;
    sessionStorage.setItem("cookie",taken);

    displayedBox.style.display= "none";
    nextBox.style.display= "block";

    // navigation item coloring

    let oldLi;
    if(selectedLi==='0') oldLi= inventoryModule;
    else if(selectedLi==='1') oldLi= userModule;
    else if(selectedLi==='2') oldLi= reportModule;
    else oldLi= settingModule;

    if(taken != selectedLi)
    {
        if(taken==='0') changeColor=inventoryModule;
        else if(taken==='1') changeColor=userModule;
        else if(taken==='2') changeColor=reportModule;
        else if(taken==='3') changeColor=settingModule;
        selectedLi= taken;
    }

    oldLi.style.border= "none";
    oldLi.style.backgroundColor= "";

    changeColor.style.borderLeft= "3px solid #1ca1c1";
    changeColor.style.backgroundColor= "#373a42";
}
//Log Out implementation
let logout=document.querySelector(".logoutMenu");
logout.addEventListener("change",redirect);
function redirect(){
    window.location.href="./sign_in/signin.html";
    sessionStorage.setItem("loginid",false);
}
let loginid = sessionStorage.getItem("loginid");
if(!loginid){
    window.location.href="./sign_in/signin.html";
}