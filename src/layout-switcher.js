import { LayoutManager } from "./layout-manager";

export class LayoutSwitcher {
    #contentArea;
    #form;
    #toDo;

    constructor(selector) {
        const layoutManager = new LayoutManager();
        this.#contentArea = document.querySelector(selector);
        this.#form = layoutManager.formLayout;
        this.#toDo = document.querySelector("#toDo");
        this.addLayoutsToContent();
    }

    switchToForm() {
        this.#form.classList.remove("hidden");
        this.#toDo.classList.add("hidden");
    }

    addLayoutsToContent() {
        this.#contentArea.appendChild(this.#form);
        this.#contentArea.appendChild(this.#toDo);
    }
}