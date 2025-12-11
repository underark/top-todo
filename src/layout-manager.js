import { FormBuilder } from "./form-builder";
import { LayoutBuilder } from "./layout-builder";

export class LayoutManager {
    #formLayout;
    #toDoLayout;
    #projectsSelect;

    constructor() {
        const formBuilder = new FormBuilder();
        const layoutBuilder = new LayoutBuilder();
        this.#formLayout = formBuilder.makeForm();
        this.#toDoLayout = layoutBuilder.buildAllToDoScreen();
        this.#projectsSelect = layoutBuilder.buildProjectSelect();
    }

    get formLayout() {
        return this.#formLayout;
    }

    get toDoLayout() {
        return this.#toDoLayout;
    }

    get projectsLayout() {
        return this.#projectsSelect;
    }
}