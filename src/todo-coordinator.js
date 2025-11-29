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

    constructor() {
        this.#storageManager = new StorageManager();
        this.#projectManager = ProjectManager();
        this.#viewManager = ViewManager();
    }

    setUpFromLocalStorage() {
        projectManager.addProject("default");
        const savedData = storageManager.readFromStorage();
        console.log(savedData);
        projectManager.buildFromObjects(savedData);
        viewManager.addAllToDo(projectManager.getProjects());
    }
}