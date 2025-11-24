export class ButtonShop {
    wireButton(button, id, ...functions) {
        button.addEventListener("click", () => {
            functions.forEach(f => f(id));
        });
    }

    wireDeleteButtons(rowMap, deleteMethod, otherFunctions) {
        for (const [project, rows] of rowMap) {
             rows.forEach(row => this.wireButton(row.deleteButton, row.row.id, deleteMethod(project), otherFunctions));
        }
    }

    // Using a new function here because these functions will not be using id
    // like the ones in wireButton() method above
    wireNewProjectButton(button, ...functions) {
        button().addEventListener("click", () => {
            functions.forEach(f => f());
        })
    }
}