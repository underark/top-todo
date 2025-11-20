import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";

const projectManager = ProjectManager();
const viewManager = ViewManager("tbody");
// Feature is currently broken - find a way to reference the correct project
const buttonShop = new ButtonShop();
const storageManager = new StorageManager();
const form = document.querySelector("form");


document.addEventListener("DOMContentLoaded", () => {
    // Add a service layer to handle all this logic
    const savedData = storageManager.readFromStorage();
    console.log(savedData);
    projectManager.buildFromObjects(savedData);
    viewManager.addAllToDo(projectManager.getProjects());
    console.log(projectManager.getProjects());

    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);
        const t = projectManager.addTaskFromData("default", data);
        const rowObject = viewManager.addToDo(t);
        buttonShop.wireButton(rowObject.deleteButton, t.id, viewManager.removeToDo, projectManager.getDeleteMethod("default"));
    });
});

document.addEventListener("visibilitychange", () => {
    const projectsMap = projectManager.getProjects();
    storageManager.writeToStorage(projectsMap);
}) 