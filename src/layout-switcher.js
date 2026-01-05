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

    showLayout(...layoutSelectors) {
        this.#hideAllLayouts();
        layoutSelectors.forEach(selector => {
            const chosen = document.querySelector(selector);
            chosen.classList.remove("hidden");
        })
    }

    #hideAllLayouts() {
        for (const node of this.#contentArea.children) {
            node.classList.add("hidden");
        }
    }

    addLayoutsToContent() {
        this.#contentArea.appendChild(this.#projects);
        this.#contentArea.appendChild(this.#form);
        this.#contentArea.appendChild(this.#toDo);
    }
}