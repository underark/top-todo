import { LayoutManager } from "./layout-manager";

export class LayoutSwitcher {
    #contentArea;
    #form;
    #toDo;
    #projects;

    constructor(selector) {
        const layoutManager = new LayoutManager();
        this.#contentArea = document.querySelector(selector);
        this.#form = layoutManager.formLayout;
        this.#toDo = layoutManager.toDoLayout;
        this.#projects = layoutManager.projectsLayout;
        this.addLayoutsToContent();
    }

    switchToForm() {
        this.#form.classList.remove("hidden");
        this.#projects.classList.add("hidden");
        this.#toDo.classList.add("hidden");
    }

    switchToToDo() {
        this.#form.classList.add("hidden");
        this.#projects.classList.add("hidden");
        this.#toDo.classList.remove("hidden");
    }

    switchToProjects() {
        this.#projects.classList.remove("hidden");
        this.#toDo.classList.remove("hidden");
        this.#form.classList.add("hidden");
    }

    addLayoutsToContent() {
        this.#contentArea.appendChild(this.#projects);
        this.#contentArea.appendChild(this.#form);
        this.#contentArea.appendChild(this.#toDo);
    }
}