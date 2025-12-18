import { FormManager } from "./form-manager";
import { ProjectManager } from "./project-manager";
import { StorageManager } from "./storage-manager";
import { ViewService } from "./view-service";

export class TaskService {
    #viewService;
    #projectManager;
    #storageManager;

    constructor() {
        this.#viewService = new ViewService();
        this.#projectManager = ProjectManager();
        this.#storageManager = new StorageManager();
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
        const newToDo = this.#projectManager.addTaskFromData(data);
        this.#viewService.displayNewToDo(data.get("project"), newToDo);
    }
}