export class LayoutBuilder {
    buildAllToDoScreen() {
        const div = document.createElement("div");
        div.id = "toDo";
        div.classList.add("hidden");
        return div;
    }

    buildProjectsScreen() {
        const div = document.createElement("div");
        div.id = "projects";
        div.classList.add("hidden");
        div.appendChild(this.#buildSelect());        
        return div;
    }

    #buildSelect() {
        const s = document.createElement("select");
        s.id = "projects-select";
        return s;
    }
}