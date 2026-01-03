import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";
import { FormManager } from "./form-manager";
import { LayoutManager } from "./layout-manager";
import { ToDoCoordinator } from "./todo-coordinator";
import "./style.css";

const toDoCoordinator = new ToDoCoordinator();
const projectManager = ProjectManager();
const formManager = new FormManager();
// Feature is currently broken - find a way to reference the correct project
const storageManager = new StorageManager();
const newProjectButton = document.querySelector("#project-new");


document.addEventListener("DOMContentLoaded", () => {
    toDoCoordinator.performInitialSetup();
    toDoCoordinator.wireForm();
    toDoCoordinator.wireOnQuitSave();

    // // TODO: Add filter for individual projects
    // options.forEach(option => {
    //     option.addEventListener("click", () => {
    //         viewManager.ShowProjectToDo(option.value);
    //     });
    // });


    // newProjectButton.addEventListener("click", () => {
    //     const projectName = prompt("Enter a project title");
    //     if (projectName) {
    //         projectManager.addProject(projectName);
    //         formManager.populateProjectSelect(projectManager.getProjectNames());
    //     }
    // })
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