import memory from "../memory.js";
import {
    getUserComponents
} from "./getUserComponents.js";

memory.uniqueUsers = [];
function getUniqueUsers() {
    for (let user of memory.userData) {
        if (!memory.uniqueUsers.find((dummy) => user.username === dummy.username))
            memory.uniqueUsers.push(user);
    }
    for (let user of memory.uniqueUsers) {
        enterUserLi(user);
    }
}

export function getUserList() {
    let load = document.querySelector(".loading-userMgt");
    load.style.display = "none";
    getUniqueUsers();
}

export function enterUserLi(user) {
    let userItem = document.createElement('li');
    userItem.setAttribute('class', "user-container-list-ele");
    userItem.addEventListener('click', getUserComponents);
    let userName = document.createElement('span');
    let userEmail = document.createElement('span');
    userName.innerHTML = user.username;
    userEmail.innerHTML = user.email;
    userName.setAttribute('class', 'bold-text');
    userItem.appendChild(userName);
    userItem.appendChild(userEmail);
    userItem.setAttribute('id', user.id);
    memory.userList.appendChild(userItem);
}