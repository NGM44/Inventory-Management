import memory from "../memory.js";
import { callData } from "../utility.js";

import { enterInfo } from "./enterInfo.js";

import { searchWithType , searchWithStatus } from "./searchWithCondition.js";

import { refreshData } from "./refreshData.js";

//Call the Fetch function using calldata global module

//callData("./InventoryDB_Server/data/reports.json").then((response) => {
callData(" http://localhost:{port}/comments").then((response) => {
    //data=  await promise.json();
  console.log(response);
    memory.info = response;         //Transfer data to local Memory
    let load = document.querySelector(".loading-report");//Loader for the Report
    load.style.display = "none";        //hiding the loader on load
    enterInfo();                   //Displaying the Report

    let typeReport = document.querySelector(".type-product");//fetching the Types of product from report
    searchWithType(typeReport);

    let statusAdded = document.querySelector(".status-product");//fetching the Types of Status of Product from report
    searchWithStatus(statusAdded);
})


document.querySelector('#fromDate').addEventListener("change",refreshData);
document.querySelector('#toDate').addEventListener("change",refreshData);

document.querySelector('.status-product').addEventListener("change",refreshData);//Refreshing the Report with selected status of product

document.querySelector('.type-product').addEventListener("change",refreshData);//Refreshing the Report with Selected Type of product








