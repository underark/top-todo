export class SelectManager {
    populateProjectSelect(selector, projects) {
        const select = document.querySelector(selector);
        this.#clearSelect(select);
        projects.forEach(p => {
            const option = this.#createProjectOption(p);
            select.appendChild(option);
        });
    }

    #createProjectOption(project) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        return option;
    }

    #clearSelect(select) {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    }
}