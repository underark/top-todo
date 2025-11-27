export class CardFactory {
    makeCard(title, dueDate) {
        const card = document.createElement("div");
        const t = this.#makeCardTitle(title);
        const d = this.#makeCardDueDate(dueDate);
        const b = this.#makeCardButtons();
        card.appendChild(t);
        card.appendChild(d);
        card.appendChild(b);
        this.#applyCardStyles(card);
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

    #makeCardButtons() {
        const d = document.createElement("div");
        d.classList.add("buttons");
        const b = document.createElement("button");
        b.textContent = "do something";
        d.appendChild(b);
        return d;
    }

    #applyCardStyles(card) {
        card.classList.add("card");
    }
}