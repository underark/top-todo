export class LayoutBuilder {
    buildAllToDoScreen() {
        const div = document.createElement("div");
        div.id = "toDo";
        div.classList.add("hidden");
        return div;
    }

    buildProjectSelect() {
        const s = document.createElement("select");
        s.id = "projects-select";
        s.classList.add("hidden");
        return s;
    }
}