import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { TableFactory } from "./table-factory";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";

const projectManager = ProjectManager();
const viewManager = ViewManager("tbody");
// Feature is currently broken - find a way to reference the correct project
const buttonShop = new ButtonShop([projectManager.deleteTask, viewManager.removeRow]);
const storageManager = new StorageManager();
const form = document.querySelector("form");


document.addEventListener("DOMContentLoaded", () => {
    const savedData = storageManager.readFromStorage();
    console.log(savedData);
    projectManager.buildFromObjects(savedData);
    viewManager.addAllToDo(projectManager.getProjects());
    console.log(projectManager.getProjects());

    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);

        const t = projectManager.addTask(
            "default",
            data.get("title"),
            data.get("description"),
            data.get("date"),
            data.get("priority")
        );

        const rowObject = viewManager.addToDo(t);
        buttonShop.wireDeleteButton(rowObject.deleteButton, t.id);
    });
});

document.addEventListener("visibilitychange", () => {
    const projectsMap = projectManager.getProjects();
    storageManager.writeToStorage(projectsMap);
}) 