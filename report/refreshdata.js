import {
    enterInfo
} from "./enterInfo.js";

export function refreshData() {
    let bigList = document.querySelector(".biglist-report");
    bigList.innerHTML = "";
    enterInfo();
};

