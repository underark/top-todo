import { FormBuilder } from "./form-builder";

export class LayoutManager {
    #formLayout;

    constructor() {
        const formBuilder = new FormBuilder();
        this.#formLayout = formBuilder.makeForm();
    }

    get formLayout() {
        return this.#formLayout;
    }
}