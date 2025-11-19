export class ToDo {
    #id;
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        // Adding an "r" because we will use these for html IDs, which cannot begin with numbers
        // when used as CSS selectors
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

    asObject() {
        return {
            title: this.#title,
            description: this.#description,
            dueDate: this.#dueDate,
            priority: this.priority,
        }
    }

    static fromObject(object) {
        return new ToDo(
            object.title,
            object.description,
            object.dueDate,
            object.priority
        )
    }
}