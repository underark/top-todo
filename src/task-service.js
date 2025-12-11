import { FormManager } from "./form-manager";
import { ProjectManager } from "./project-manager";
import { StorageManager } from "./storage-manager";
import { ViewService } from "./view-service";

export class TaskService {
    #viewService;
    #projectManager;
    #formManager;
    #storageManager;

    constructor() {
        this.#viewService = new ViewService();
        this.#projectManager = ProjectManager();
        this.#formManager = new FormManager();
        this.#storageManager = new StorageManager();
    }

    loadStoredTasks() {
        const saved = this.#storageManager.readFromStorage();
        this.#projectManager.buildFromObjects(saved);
    }

    populateTodoDisplay() {
        const toDos = this.#projectManager.getProjects();
        this.#viewService.populateNewToDos(toDos);
    }

    addNewToDo() {
        const data = this.#formManager.getFormData();
        const newToDo = this.#projectManager.addTaskFromData(data);
        this.#viewService.displayNewToDo(newToDo);
    }

    // #createNewToDo() {
    //     const data = this.#formManager.getFormData();
    //     const toDo = this.#projectManager.addTaskFromData(data.get("project"), data);
    //     this.#viewManager.addToDo(data.get("project"), toDo);
    //     const card = this.#viewManager.getCard(data.get("project"), toDo.id);
    //     this.#buttonShop.wireButton(card.deleteButton, toDo.id, this.#projectManager.getDeleteMethod("default"), this.#viewManager.removeToDo);
    // }
}