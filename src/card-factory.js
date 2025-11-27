export class CardFactory {
    makeCard(toDo) {
        const card = document.createElement("div");
        const t = this.#makeCardTitle(toDo.title);
        const d = this.#makeCardDueDate(toDo.dueDate);
        const b = this.#makeCardButton();
        card.appendChild(t);
        card.appendChild(d);
        card.appendChild(b);
        this.#applyCardStyles(card);
        return {
            card: card,
            deleteButton: b,
        }
    }

    #makeCardTitle(title) {
        const t = document.createElement("h1");
        t.textContent = title;
        return t;
    }

    #makeCardDueDate(dueDate) {
        const p = document.createElement("p");
        p.textContent = dueDate;
        return p;
    }

    #makeCardButton() {
        const b = document.createElement("button");
        b.textContent = "do something";
        return b;
    }

    #applyCardStyles(card) {
        card.classList.add("card");
    }
}