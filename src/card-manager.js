export class CardManager {
    #cards;

    constructor() {
        this.#cards = new Map();
    }

    pushToMap(project, cardObject) {
        if (this.#cards.has(project)) {
            this.#cards.get(project).push(cardObject);
        } else {
            this.#cards.set(project, []);
            this.#cards.get(project).push(cardObject);
        }
    }

    deleteCard(project, id) {
        let savedCards = this.#cards.get(project);
        savedCards = savedCards.filter(c => c.card.id === id);
    }

    getCards() {
        return this.#cards;
    }

    getProjectCards(project) {
        return this.#cards.get(project);
    }

    getCard(project, id) {
        return this.#cards.get(project).find(c => c.card.id == id);
    }
}