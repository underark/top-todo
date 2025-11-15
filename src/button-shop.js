export class ButtonShop {
    #deleteFunctions = [];

    constructor(deleteFunctionArray) {
        this.#deleteFunctions = deleteFunctionArray;
    }

    wireDeleteButton(button, id) {
        button.addEventListener("click", () => {
            this.#deleteFunctions.forEach(f => f(id));
        });
    }
}