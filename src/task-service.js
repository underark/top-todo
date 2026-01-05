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
        this.#wireExistingToDoButtons();
    }

    getProjectNames() {
        return this.#projectManager.getProjectNames();
    }

    #loadStoredTasks() {
        const saved = this.#storageManager.readFromStorage();
        this.#projectManager.buildFromObjects(saved);
    }

    #wireExistingToDoButtons() {
        const cardsMap = this.#viewService.getCards();
        cardsMap.forEach((cards, project) => this.#buttonShop.wireDeleteButtons(cards, project));
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

    saveExistingData() {
        const data = this.#projectManager.getProjectsAsObjects();
        this.#storageManager.writeToStorage(data);
    }

    showAllToDo() {
        this.#viewService.clearDisplay();
        const cards = this.#viewService.getCards();
        cards.forEach(cardObjectArray => {
            this.#viewService.displayProject(cardObjectArray);
        })
    }

    showProject(projectName) {
        this.#viewService.clearDisplay();
        const cards = this.#viewService.getProjectCards(projectName);
        console.log(cards);
        if (cards.length > 0) {
            this.#viewService.displayProject(cards);
        }
    }

    addNewProject(projectName) {
        this.#projectManager.addProject(projectName);
    }
}