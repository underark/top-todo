import { TableFactory } from "./table-factory";

// This is a factory function because we want to make the tbody private but pass the functions around later
export function ViewManager(selector) {
    const tableFactory = new TableFactory();
    const table = document.querySelector(selector);
    const projectRows = new Map();

    // Move these method returns to a stored array variable and add a getter
    const addToDo = (project, toDo) => {
        const rowObject = tableFactory.makeTableRow(toDo);
        appendRow(rowObject.row);
        pushToMap(project, rowObject);
    }

    const addAllToDo = (toDoMap) => {
        clearToDos();
        for (const [project, toDos] of toDoMap) {
            toDos.forEach(toDo => addToDo(project, toDo));
        }
    }
    
    const ShowProjectToDo = (project) => {
        clearToDos();
        const toDoRows = projectRows.get(project);
        toDoRows.forEach(row => appendRow(row.row));
    }

    const removeToDo = (id) => {
        const row = document.querySelector("#" + id);
        console.log(id);
        table.removeChild(row);
    }

    const clearToDos = () => {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
    }

    const getRows = () => {
        return projectRows;
    }

    const getRow = (project, id) => {
        return projectRows.get(project).find(r => r.row.id == id);
    }

    const appendRow = (row) => {
        table.appendChild(row);
    }

    const pushToMap = (project, rowObject) => {
        if (projectRows.has(project)) {
            projectRows.get(project).push(rowObject);
        } else {
            projectRows.set(project, []);
            projectRows.get(project).push(rowObject);
        }
    }
    
    return {
        addToDo,
        addAllToDo,
        ShowProjectToDo,
        removeToDo,
        getRow,
        getRows,
    }
};