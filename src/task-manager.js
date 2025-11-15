import { ToDo } from "./todo";

export class TaskManager {
    #tasks = [];

    addTask(title, description, dueDate, priority) {
        const t = new ToDo(title, description, dueDate, priority);
        this.#tasks.push(t);
        return t;
    }

    getTask(id) {
        return this.#tasks.filter(t => t.id() == id);
    }
}