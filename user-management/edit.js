import memory from "../memory.js";
import {
    displayUserComponents
} from "./getUserComponents.js";
import {
    displayComponentDetails
} from "./showComponentDetails.js";

export function formPopUp() {
    let description = document.querySelector('.tool-description-content');
    description.setAttribute('style', 'z-index: -1');
    let editForm = document.querySelector('#edit-tool-form');
    editForm.setAttribute('style', 'z-index: 1');
    let target = document.querySelector('.tool-description-primary-header');
    target.append(memory.cancelButton);
    target = document.querySelector('#save-button-parent');
    target.append(memory.saveButton);
    memory.saveButton.addEventListener('click', formSaved);
    memory.cancelButton.addEventListener('click', formCanceled);

    let serialValue = document.querySelector('#serial-input');
    serialValue.value = memory.theComponent.serial;
    let nameValue = document.querySelector('#name-input');
    nameValue.value = memory.theComponent.name;
    let typeValue = document.querySelector('#type-input');
    typeValue.value = memory.theComponent.type;
}

export function formSaved() {

    let description = document.querySelector('.tool-description-content');
    description.setAttribute('style', 'z-index: 1');
    let editForm = document.querySelector('#edit-tool-form');
    editForm.setAttribute('style', 'z-index: -1');
    let parent = document.querySelector('.tool-description-primary-header');
    parent.removeChild(memory.cancelButton);
    let saveButtonParent = document.querySelector('#save-button-parent');
    saveButtonParent.removeChild(memory.saveButton);
    memory.editFormButton.setAttribute('class', 'show');

    let typeValue = document.querySelector('#type-input').value;
    memory.theComponent.type = typeValue;

    let serialValue = document.querySelector('#serial-input').value;
    memory.theComponent.serial = serialValue;

    let nameValue = document.querySelector('#name-input').value;
    memory.theComponent.name = nameValue;

    let modelValue = document.querySelector('#model-input').value;
    memory.theComponent.model = modelValue;

    let sizeValue = document.querySelector('#size-input').value;
    memory.theComponent.size = sizeValue;

    let tagsString = document.querySelector('#tags-input').value;
    let tags = tagsString.split(' ');
    let validTags = tags.filter(tag => {
        return tag != null && tag != '';
      });
    memory.theComponent.tags = validTags;

    let notesValue = document.querySelector('#notes-input').value;
    memory.theComponent.notes = notesValue;

    let editingForm = document.querySelector('#editing-form');
    editingForm.reset();
    displayUserComponents(memory.selectedUser);
    displayComponentDetails(memory.theComponent);
}

export function formCanceled() {
    let editingForm = document.querySelector('#editing-form');
    editingForm.reset();
    let description = document.querySelector('.tool-description-content');
    description.setAttribute('style', 'z-index: 1');
    let editForm = document.querySelector('#edit-tool-form');
    editForm.setAttribute('style', 'z-index: -1');
    let parent = document.querySelector('.tool-description-primary-header');
    parent.removeChild(memory.saveButton);
    parent.removeChild(memory.cancelButton);
    memory.editFormButton.setAttribute('class', 'show');
}