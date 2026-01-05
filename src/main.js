import { ToDoCoordinator } from "./todo-coordinator";
import "./style.css";

const toDoCoordinator = new ToDoCoordinator();

document.addEventListener("DOMContentLoaded", () => {
    toDoCoordinator.performInitialSetup();
    toDoCoordinator.wireForm();
    toDoCoordinator.wireUI();
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

// TODO:
// Add layout switching
// Refactor logic in main to a coordinator class
// Polish css
// Add ability to edit to do
// Add parsing for dates
// Add "all" option to view projects