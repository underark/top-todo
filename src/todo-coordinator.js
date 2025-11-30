import { ProjectManager } from "./project-manager";
import { ViewManager } from "./view-manager";
import { ButtonShop } from "./button-shop";
import { StorageManager } from "./storage-manager";
import { FormManager } from "./form-manager";
import { LayoutSwitcher } from "./layout-switcher";

export class ToDoCoordinator {
    #storageManager;
    #projectManager;
    #viewManager;
    #buttonShop;
    #formManager;
    #layoutSwitcher;

    constructor() {
        this.#layoutSwitcher = new LayoutSwitcher("#content-area");
        this.#storageManager = new StorageManager();
        this.#projectManager = ProjectManager();
        this.#viewManager = ViewManager("#toDo");
        this.#buttonShop = new ButtonShop();
        this.#formManager = new FormManager();
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

    populateProjectSelect() {
        const projectNames = this.#projectManager.getProjectNames();
        this.#formManager.populateProjectSelect(projectNames);
    }

    setUpForm() {
        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.#createNewToDo();
        });
    }

    #createNewToDo() {
        const data = this.#formManager.getFormData();
        const toDo = this.#projectManager.addTaskFromData(data.get("project"), data);
        this.#viewManager.addToDo(data.get("project"), toDo);
        const card = this.#viewManager.getCard(data.get("project"), toDo.id);
        this.#buttonShop.wireButton(card.deleteButton, toDo.id, this.#projectManager.getDeleteMethod("default"), this.#viewManager.removeToDo);
    }
}