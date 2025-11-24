export class FormManager {
    #form;
    #projectSelect;

    constructor() {
        this.#form = document.querySelector("form");
        this.#projectSelect = document.querySelector("#project");
    }

    populateProjectSelect(projects) {
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
}