import { TaskManager } from "./task-manager";
import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { TableFactory } from "./table-factory";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";

document.addEventListener("DOMContentLoaded", function() {
    const taskManager = TaskManager();
    const projectManager = ProjectManager();
    const viewManager = ViewManager("tbody");
    const tableFactory = new TableFactory();
    const buttonShop = new ButtonShop([taskManager.deleteTask, viewManager.removeRow]);
    const storageManager = new StorageManager();
    const form = document.querySelector("form");

    if (storageManager.storageIsEmpty()) {
        projectManager.addProject("default");
        const projects = projectManager.getProjects();
        projects.forEach((key, value) => localStorage.setItem(key, JSON.stringify(value)));
    }
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);

        const t = taskManager.addTask(
            data.get("title"),
            data.get("description"),
            data.get("date"),
            data.get("priority")
        );

        const rowObject = tableFactory.makeTableRow(
            t.id,
            t.title,
            t.description,
            t.dueDate,
            t.priority
        );
        buttonShop.wireDeleteButton(rowObject.deleteButton, t.id);
        viewManager.appendRow(rowObject.row);
    });
});