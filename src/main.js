import { TaskManager } from "./task-manager";
import { ViewManager } from "./view-manager";
import { TableFactory } from "./table-factory";
import { ButtonShop } from "./button-shop";

document.addEventListener("DOMContentLoaded", function() {
    const taskManager = TaskManager();
    const viewManager = ViewManager("tbody");
    const tableFactory = new TableFactory();
    const buttonShop = new ButtonShop([taskManager.deleteTask, viewManager.removeRow]);
    const form = document.querySelector("form");
    
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