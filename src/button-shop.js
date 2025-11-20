export class ButtonShop {
    wireButton(button, id, ...functions) {
        button.addEventListener("click", () => {
            functions.forEach(f => f(id));
        });
    }

    wireButtons(rowMap, deleteMethod, otherFunctions) {
        for (const [project, rows] of rowMap) {
             rows.forEach(row => this.wireButton(row.deleteButton, row.row.id, deleteMethod(project), otherFunctions));
        }
    }
}