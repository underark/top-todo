import { TableFactory } from "./table-factory";

// This is a factory function because we want to make the tbody private but pass the functions around later
export function ViewManager(selector) {
    const tableFactory = new TableFactory();
    const table = document.querySelector(selector);

    const addToDo = (toDo) => {
        const rowObject = tableFactory.makeTableRow(toDo);
        appendRow(rowObject.row);
        return rowObject;
    }

    const addAllToDo = (toDoMap) => {
        // Kind of ugly that we're not using project here...
        for (const [project, toDos] of toDoMap) {
            toDos.forEach(toDo => addToDo(toDo));
        }
    }

    const removeToDo = (id) => {
        const row = document.querySelector("#" + id);
        table.removeChild(row);
    }

    const appendRow = (row) => {
        table.appendChild(row);
    }
    
    return {
        addToDo,
        addAllToDo,
        removeToDo,
    }
};