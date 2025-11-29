import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";
import { FormManager } from "./form-manager";
import { LayoutManager } from "./layout-manager";

export class ToDoCoordinator {
    #storageManager;
    #projectManager;
    #viewManager;
    #buttonShop;

    constructor() {
        this.#storageManager = new StorageManager();
        this.#projectManager = ProjectManager();
        this.#viewManager = ViewManager("#toDo");
        this.#buttonShop = new ButtonShop();
    }

    setUpFromLocalStorage() {
        const savedData = this.#storageManager.readFromStorage();
        this.#projectManager.buildFromObjects(savedData);
    }

    populateToDoDisplay() {
        const toDos = this.#projectManager.getProjects();
        this.#viewManager.addAllToDo(toDos);
    }

    wireDeleteButtons() {
        const cards = this.#viewManager.getCards();
        const deleteMethod = this.#projectManager.getDeleteMethod;
        const viewDeleteMethod = this.#viewManager.removeToDo;
        this.#buttonShop.wireDeleteButtons(cards, deleteMethod, viewDeleteMethod);
    }
}