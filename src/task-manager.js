import { ToDo } from "./todo";

// This is a factory function because we want to make the array private but pass the functions around later
export function TaskManager() {
    let tasks = new Array();

    const addTask = (data) => {
        const t = new ToDo(
            data.get("title"),
            data.get("description"),
            data.get("dueDate"),
            data.get("priority")
        );
        tasks.push(t);
        return t;
    }

    const addTasksFromObject = (objectArray) => {
        tasks = objectArray.map(o => ToDo.fromObject(o));
    }

    const deleteTask = (id) => {
        tasks = tasks.filter(t => t.id != id);
    }

    const getTask = (id) => {
        return tasks.filter(t => t.id() == id);
    };

    // Consider renaming method and adding a new method to get the raw tasks
    const getTasks = () => {
        return tasks.map(t => t.asObject());
    }

    return {
        addTask,
        addTasksFromObject,
        deleteTask,
        getTask,
        getTasks,
    }
}