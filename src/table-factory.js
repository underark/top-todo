export class TableFactory {
    // Returning the row and buttons in an object so we can wire up methods to buttons later
    makeTableRow(id, title, description, dueDate, priority) {
        const tr = document.createElement("tr");
        tr.id = id;
        const titleCell = this.#makeTableData(title);
        const descCell = this.#makeTableData(description);
        const dueCell = this.#makeTableData(dueDate);
        const priorityCell = this.#makeTableData(priority);
        const delButton = this.#makeButton("🗑️");
        this.#collectElements(tr, titleCell, descCell, dueCell, priorityCell, delButton);
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

    #collectElements(container, ...elements) {
        elements.forEach(e => container.appendChild(e));
        return container;
    }
}