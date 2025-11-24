export class FormManager {
    #form;
    #projectSelect;

    constructor() {
        this.#form = document.querySelector("form");
        this.#projectSelect = document.querySelector("#project");
    }

    populateProjectSelect(projects) {
        this.#clearProjectSelect();
        projects.forEach(p => {
            const option = this.#createProjectOption(p);
            this.#projectSelect.appendChild(option);
        });
    }

    #createProjectOption(project) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        return option;
    }

    #clearProjectSelect() {
        while (this.#projectSelect.firstChild) {
            this.#projectSelect.removeChild(this.#projectSelect.firstChild);
        }
    }
}