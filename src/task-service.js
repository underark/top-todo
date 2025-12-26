import { ButtonShop } from "./button-shop";
import { ProjectManager } from "./project-manager";
import { StorageManager } from "./storage-manager";
import { ViewService } from "./view-service";

export class TaskService {
    #viewService;
    #projectManager;
    #storageManager;
    #buttonShop;

    constructor() {
        this.#viewService = new ViewService();
        this.#projectManager = ProjectManager();
        this.#storageManager = new StorageManager();
        this.#buttonShop = new ButtonShop(this.#projectManager, this.#viewService);
    }

    loadAndPopulateTasks() {
        this.#loadStoredTasks();
        this.#populateTodoDisplay();
    }

    getProjectNames() {
        return this.#projectManager.getProjectNames();
    }

    #loadStoredTasks() {
        const saved = this.#storageManager.readFromStorage();
        this.#projectManager.buildFromObjects(saved);
    }

    #populateTodoDisplay() {
        const toDos = this.#projectManager.getProjects();
        this.#viewService.populateNewToDos(toDos);
    }

    addNewToDo() {
        const form = document.querySelector("form");
        const data = new FormData(form);
        const project = data.get("project");
        const newToDo = this.#projectManager.addTaskFromData(data);
        this.#viewService.displayNewToDo(project, newToDo);
        const card = this.#viewService.getCard(project, newToDo.id);
        this.#buttonShop.wireDeleteButton(card.deleteButton, project, newToDo.id);
    }

    deleteToDo(project, id) {
        this.#projectManager.deleteTask(project, id);
        this.#viewService.removeToDoFromDisplay(project, id);
    }
}