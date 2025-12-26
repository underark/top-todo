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
}