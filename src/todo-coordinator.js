import { SelectManager } from "./select-manager";
import { LayoutSwitcher } from "./layout-switcher";
import { TaskService } from "./task-service";

export class ToDoCoordinator {
    #taskService;
    #selectManager;
    #layoutSwitcher;

    constructor() {
        this.#layoutSwitcher = new LayoutSwitcher("#content-area");
        this.#selectManager = new SelectManager();
        this.#taskService = new TaskService();
    }

    performInitialSetup() {
        this.#taskService.loadAndPopulateTasks();
        const projectNames = this.#taskService.getProjectNames();
        this.#selectManager.populateProjectSelect("#project", projectNames);
        this.#selectManager.populateProjectSelect("#projects-select", projectNames);
        this.#wireProjectSelect();
        // this.wireNewProjectButton();
    }

    wireForm() {
        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.#taskService.addNewToDo();
        })
    }

    wireNewProjectButton() {
        const newProjectButton = document.querySelector("#new-project");
        newProjectButton.addEventListener("click", () => {
            const projectName = prompt("New project name:");
            this.#taskService.addNewProject(projectName);
            const projects = this.#taskService.getProjectNames();
            this.#selectManager.populateProjectSelect("#project", projects);
            this.#selectManager.populateProjectSelect("#projects-select", projects);
        })
    }

    wireUI() {
        this.#setUpFormButton();
        this.#setUpHomeButton();
        this.#setUpProjectsButton();
    }

    #setUpHomeButton() {
        const home = document.querySelector("#home");
        home.addEventListener("click", () => {
            this.#layoutSwitcher.showLayout("#toDo");
            this.#taskService.showAllToDo();
        });
    }

    #setUpFormButton() {
        const f = document.querySelector("#new");
        f.addEventListener("click", () => {
            this.#layoutSwitcher.showLayout("form");
        })
    }

    #setUpProjectsButton() {
        const all = document.querySelector("#all");
        all.addEventListener("click", () => {
            const projects = this.#taskService.getProjectNames();
            this.#selectManager.populateProjectSelect("#projects-select", projects);
            this.#layoutSwitcher.showLayout("#toDo", "#projects-select");
        })
    }

    #wireProjectSelect() {
        const projectSelect = document.querySelector("#projects-select");
        projectSelect.addEventListener("change", () => {
            this.#taskService.showProject(projectSelect.value);
        })
    }

    wireOnQuitSave() {
        document.addEventListener("visibilitychange", () => {
            this.#taskService.saveExistingData();
        })
    }
}