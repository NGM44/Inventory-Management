import {
    showDetailedLog
} from "./showDetailedLog.js";
import memory from "../memory.js";

export function showComponentDetails(event) {
    memory.theComponent = memory.matches.find((comp) => comp.id == event.currentTarget.id);
    let editContainer = document.querySelector(".tool-description-container");
    editContainer.style.display = "flex";

    let closeEditContainer = document.getElementById("close-button");
    closeEditContainer.addEventListener('click', function () {
        editContainer.style.display = "none";
    });
    displayComponentDetails(memory.theComponent);
}
export function displayComponentDetails(comp) {
    let header = document.getElementById('component-header');
    header.innerHTML = "";
    header.innerHTML = comp.type + " " + comp.serial;

    let assignedToTarget = document.querySelector('#tool-assigned-to');
    for (let user of memory.uniqueUsers) {
        let userItem = document.createElement('option');
        userItem.value = user.username;
        userItem.innerHTML = user.username;
        if (user.username === memory.selectedUser.username)
            userItem.selected = true;
        assignedToTarget.appendChild(userItem);
    }

    let txtModel = document.querySelector('#tool-model');
    if (comp.model) {
        txtModel.innerHTML = comp.model;
    } else {
        txtModel.innerHTML = "A001";
    }

    let txtSize = document.querySelector('#tool-size');
    if (comp.size) {
        txtSize.innerHTML = comp.size;
    } else {
        txtSize.innerHTML = '23';
    }
    let txtTags = document.querySelector('#tool-tags');
    if (comp.tags) {
        for (let dummy of comp.tags) {
            let tag = document.createElement('span');
            tag.setAttribute('class', 'tag-format');
            tag.innerHTML = "#" + dummy;
            txtTags.appendChild(tag);
        }
    } else {
        txtTags.innerHTML = "";
    }
    let txtNotes = document.querySelector('#notes');
    if (comp.notes) {
        txtNotes.innerHTML = comp.notes;
    } else {
        txtNotes.innerHTML = "abc xyz";
    }

    let linkTarget = document.getElementById('detailed-log');
    linkTarget.innerHTML = "";
    let detailedLogLink = document.createElement('a');
    detailedLogLink.innerHTML = "Show Detailed Log";
    detailedLogLink.setAttribute('class', 'log-link');
    detailedLogLink.setAttribute('id', 'detailed-log-link');
    detailedLogLink.addEventListener('click', showDetailedLog);
    linkTarget.appendChild(detailedLogLink);
}