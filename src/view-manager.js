export class ViewManager {
    #table;

    constructor(selector) {
        this.#table = document.querySelector(selector);
    }

    appendRow(row) {
        this.#table.appendChild(row);
    }

    removeRow(id) {
        const row = document.querySelector("#" + id);
    }
}