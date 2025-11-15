import Task from "./todo.js"

export class TaskManager {
    #tasks = new Map();

    addTask(title, description, dueDate, priority) {
        const t = new Task(title, description, dueDate, priority);
        this.#tasks.set(crypto.randomUUID(), t);
        return t;
    }

    getTask(id) {
        return this.#tasks.get(id);
    }
}