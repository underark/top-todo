export class TableFactory {
    // Returning the row and buttons in an object so we can wire up methods to buttons later
    makeTableRow(toDo) {
        const titleCell = this.#makeTableData(toDo.title);
        const descCell = this.#makeTableData(toDo.description);
        const dueCell = this.#makeTableData(toDo.dueDate);
        const priorityCell = this.#makeTableData(toDo.priority);
        const delButton = this.#makeButton("🗑️");
        const tr = this.#collectElements(titleCell, descCell, dueCell, priorityCell, delButton);
        tr.id = toDo.id;
        return {
            row: tr,
            deleteButton: delButton,
        }
    }

    #makeTableData(text) {
        const td = document.createElement("td");
        td.textContent = text;
        return td;
    }

    #makeButton(text) {
        const b = document.createElement("button");
        b.textContent = text;
        return b;
    }

    #collectElements(...elements) {
        const tr = document.createElement("tr");
        elements.forEach(e => tr.appendChild(e));
        return tr;
    }
}