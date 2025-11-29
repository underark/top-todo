import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";
import { FormManager } from "./form-manager";
import "./style.css";
import { LayoutManager } from "./layout-manager";
import { ToDoCoordinator } from "./todo-coordinator";

const toDoCoordinator = new ToDoCoordinator();
const projectManager = ProjectManager();
const viewManager = ViewManager("#toDo");
const formManager = new FormManager();
// Feature is currently broken - find a way to reference the correct project
const buttonShop = new ButtonShop();
const storageManager = new StorageManager();
const form = document.querySelector("form");
const newProjectButton = document.querySelector("#project-new");
const options = document.querySelectorAll("select");


document.addEventListener("DOMContentLoaded", () => {
    toDoCoordinator.setUpFromLocalStorage();
    toDoCoordinator.populateToDoDisplay();
    toDoCoordinator.wireDeleteButtons();
    // formManager.populateProjectSelect(projectManager.getProjectNames());

    // TODO: Add filter for individual projects
    options.forEach(option => {
        option.addEventListener("click", () => {
            viewManager.ShowProjectToDo(option.value);
        });
    });


    newProjectButton.addEventListener("click", () => {
        const projectName = prompt("Enter a project title");
        if (projectName) {
            projectManager.addProject(projectName);
            formManager.populateProjectSelect(projectManager.getProjectNames());
        }
    })

    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);
        const toDo = projectManager.addTaskFromData(data.get("project"), data);
        viewManager.addToDo(data.get("project"), toDo);
        const row = viewManager.getRow(data.get("project"), toDo.id);
        buttonShop.wireButton(row.deleteButton, toDo.id, projectManager.getDeleteMethod("default"), viewManager.removeToDo);
    });
});

document.addEventListener("visibilitychange", () => {
    const projectsMap = projectManager.getProjectsAsObjects();
    storageManager.writeToStorage(projectsMap);
}) 


// TODO:
// Add layout switching
// Refactor logic in main to a coordinator class
// Polish css
// Add ability to edit to do
// Add parsing for dates
// Add "all" option to view projects