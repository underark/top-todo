export class ButtonShop {
    wireButton(button, id, ...functions) {
        button.addEventListener("click", () => {
            functions.forEach(f => f(id));
        });
    }
}