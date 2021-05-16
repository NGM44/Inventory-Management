import {
    showComponentDetails
} from "./showComponentDetails.js";
import memory from "../memory.js";

export function getUserComponents(event) {
    let selectedListItem = event.currentTarget;
    memory.selectedUser = memory.userData.find((user) => user.id === parseInt(selectedListItem.id));
    let selectedName = document.getElementById('resource-description-span');
    selectedName.innerHTML = memory.selectedUser.username;
    let selectedEmail = document.getElementById('email');
    selectedEmail.innerHTML = memory.selectedUser.email;
    selectedEmail.setAttribute('href', "mailto:" + memory.selectedUser.email);
    let selectedSkype = document.getElementById('skype');
    selectedSkype.innerHTML = memory.selectedUser.skype;
    displayUserComponents(memory.selectedUser);
}

export function displayUserComponents(user) {
    memory.component.innerHTML = "";
    memory.matches = memory.userData.filter((x) => x.username === user.username);

    for (let match of memory.matches) {
        let componentItem = document.createElement('li');
        componentItem.addEventListener('click', showComponentDetails);
        componentItem.setAttribute('id', match.id);
        componentItem.setAttribute('class', 'resource-description-elements-values');
        let componentType = document.createElement('span');
        componentType.setAttribute('class', 'resource-description-feature-status');
        let componentSerial = document.createElement('span');
        componentSerial.setAttribute('class', 'resource-description-feature-status');
        let componentName = document.createElement('span');
        componentName.setAttribute('class', 'resource-description-feature-status');
        let componentFromDate = document.createElement('span');
        componentFromDate.setAttribute('class', 'resource-description-feature-status');

        componentType.innerHTML = match.type;
        componentSerial.innerHTML = match.serial;
        componentName.innerHTML = match.name;
        componentFromDate.innerHTML = match.from;
        componentItem.append(componentType, componentSerial, componentName, componentFromDate);
        memory.component.appendChild(componentItem);
    }
}