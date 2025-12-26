import { CardFactory } from "./card-factory";
import { CardManager } from "./card-manager";
import { ViewManager } from "./view-manager";

export class ViewService {
    #cardFactory;
    #cardManager;
    #viewManager;

    constructor() {
        this.#cardFactory = new CardFactory();
        this.#cardManager = new CardManager();
        this.#viewManager = ViewManager("#toDo");
    }

    displayNewToDo(project, toDo) {
        const newCard = this.#cardFactory.makeCard(toDo);
        this.#cardManager.pushToMap(project, newCard);
        this.#viewManager.showCard(newCard.card);
    }

    removeToDoFromDisplay(project, id) {
        this.#viewManager.removeCard(id);
        this.#cardManager.deleteCard(project, id);
    }

    getCard(project, id) {
        return this.#cardManager.getCard(project, id);
    }

    populateNewToDos(toDoMap) {
        for (const [project, toDos] of toDoMap) {
            this.#displayAllNewToDos(project, toDos);
        }
    }

    // Pass in an array
    #displayAllNewToDos(project, toDos) {
        toDos.forEach(toDo => this.displayNewToDo(project, toDo));
    }
}