import memory from "../memory.js";
import {getUserList, enterUserLi} from "./getUserList.js"

export function refreshData() {
    memory.userList.innerHTML = "";
    getUserList();
}

let parent = document.querySelector('#persons-header');
let cloneParent = parent.cloneNode([true]);

export function search() {
    parent.innerHTML = "";
    let searchBox = document.createElement('input');
    searchBox.setAttribute('id', 'search-input-box');
    searchBox.setAttribute('class', 'search-box');
    let crossButton = document.createElement('button');
    crossButton.setAttribute('class', 'buttons');
    let crossIcon = document.createElement('i');
    crossIcon.setAttribute('class', 'fas fa-times');
    crossButton.appendChild(crossIcon);
    crossButton.addEventListener('click', function () {
        parent.innerHTML = "";
        parent.appendChild(cloneParent);
        refreshData();
    });
    parent.appendChild(searchBox);
    parent.appendChild(crossButton);
    searchBox.addEventListener('focus', function () {
        searchBox.style.border = "2px solid #1ca1c1";
    });
    searchBox.focus();
    searchBox.addEventListener('keyup', searchUser);
}

function searchUser() {
    let queryString = document.querySelector('#search-input-box').value;
    queryString = queryString.toLowerCase();
    let matches = new Set();

    for (let user of memory.userData) {
        let txtName = user.username.toLowerCase();
        if (txtName.includes(queryString))
            matches.add(user);
    }

    let target = document.querySelector('#persons');
    target.innerHTML = "";
    if (matches.size == 0) {
        target.innerHTML = "No users found!";
    }
    for (let user of matches) {
        enterUserLi(user);
    }
}