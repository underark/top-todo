import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";
import { FormManager } from "./form-manager";

const projectManager = ProjectManager();
const viewManager = ViewManager("tbody");
const formManager = new FormManager();
// Feature is currently broken - find a way to reference the correct project
const buttonShop = new ButtonShop();
const storageManager = new StorageManager();
const form = document.querySelector("form");


document.addEventListener("DOMContentLoaded", () => {
    projectManager.addProject("default");
    // Add a service layer to handle all this logic
    const savedData = storageManager.readFromStorage();
    formManager.populateProjectSelect(projectManager.getProjectNames());
    projectManager.buildFromObjects(savedData);
    viewManager.addAllToDo(projectManager.getProjects());
    buttonShop.wireButtons(viewManager.getRows(), projectManager.getDeleteMethod, viewManager.removeToDo);

    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);
        const toDo = projectManager.addTaskFromData(data.get("project"), data);
        viewManager.addToDo("default", toDo);
        const row = viewManager.getRow("default", toDo.id);
        buttonShop.wireButton(row.deleteButton, toDo.id, projectManager.getDeleteMethod("default"), viewManager.removeToDo);
    });
});

document.addEventListener("visibilitychange", () => {
    const projectsMap = projectManager.getProjectsAsObjects();
    storageManager.writeToStorage(projectsMap);
}) 