import { collect } from "./helpers.js";

export class FormBuilder {
    makeForm() {
        const form = document.createElement("form");
        const title = this.#makeInputField("title", "Title: ");
        const desc = this.#makeInputField("description", "Description: ");
        const due = this.#makeDateField("date", "Due Date: ");
        const priority = this.#makeSelectField("priority", "Priority: ", "Low", "Medium", "High");
        const submit = this.#makeSubmitButton("New to do");
        collect(form, title, desc, due, priority, submit);
        return form;
    }

    #makeInputField(dataFor, text) {
        const formField = this.#makeContainer();
        const label = this.#makeLabel(dataFor, text);
        const input = this.#makeInput("text", dataFor, dataFor);
        formField.appendChild(label);
        formField.appendChild(input);
        return formField;
    }

    #makeDateField(dataFor, text) {
        const formField = this.#makeContainer();
        const label = this.#makeLabel(dataFor, text);
        const input = this.#makeInput("date", dataFor, dataFor);
        formField.appendChild(label);
        formField.appendChild(input);
        return formField;      
    }

    #makeSelectField(dataFor, text, ...options) {
        const formField = this.#makeContainer();
        const label = this.#makeLabel(dataFor, text);
        const select = this.#makeSelect(dataFor, dataFor);
        formField.appendChild(label);
        formField.appendChild(select);
        options.map(o => this.#makeOption(o)).forEach(option => select.appendChild(option));
        return formField;
    }

    #makeContainer() {
        const d = document.createElement("div");
        d.classList.add("form-field");
        return d;
    }

    #makeLabel(dataFor, text) {
        const l = document.createElement("label");
        l.textContent = text;
        l.setAttribute("for", dataFor);
        return l;
    }

    #makeInput(type, name, id) {
        const i = document.createElement("input");
        i.type = type;
        i.id = id;
        i.name = name;
        return i;
    }

    #makeSelect(name, id) {
        const s = document.createElement("select");
        s.name = name;
        s.id = id;
        return s;
    }

    #makeOption(text) {
        const o = document.createElement("option");
        o.value = text;
        o.textContent = text;
        return o;
    }

    #makeSubmitButton(text) {
        const b = document.createElement("button");
        b.type = "submit";
        b.textContent = text;
        return b;
    }
}