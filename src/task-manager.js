import { ToDo } from "./todo";

// This is a factory function because we want to make the array private but pass the functions around later
export function TaskManager() {
    let tasks = new Array();

    const addTask = (title, description, dueDate, priority) => {
        const t = new ToDo(title, description, dueDate, priority);
        tasks.push(t);
        return t;
    }

    const deleteTask = (id) => {
        tasks = tasks.filter(t => t.id != id);
    }

    const getTask = (id) => {
        return tasks.filter(t => t.id() == id);
    };

    return {
        addTask,
        deleteTask,
        getTask,
    }
}