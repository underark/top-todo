export class ToDo {
    #id;
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#id = "r" + crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get dueDate() {
        return this.#dueDate;
    }

    get priority() {
        return this.#priority;
    }
}