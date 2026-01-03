export class ButtonShop {
    #projectManager;
    #viewService;

    constructor(projectManager, viewService) {
        this.#projectManager = projectManager;
        this.#viewService = viewService;
    }

    wireDeleteButton(button, project, id) {
        button.addEventListener("click", () => {
            this.#projectManager.deleteTask(project, id);
            this.#viewService.removeToDoFromDisplay(project, id);
        });
    }

    wireDeleteButtons(cardArray, project) {
        // card.card.id is because the card object has a card field with an id attached to the element
        cardArray.forEach(card => this.wireDeleteButton(card.deleteButton, project, card.card.id));
    }
}