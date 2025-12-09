import { CardFactory } from "./card-factory";

// This is a factory function because we want to make the tbody private but pass the functions around later
export function ViewManager(selector) {
    const cardFactory = new CardFactory();
    const table = document.querySelector(selector);
    const cards = new Map();

    // Move these method returns to a stored array variable and add a getter
    const addToDo = (project, toDo) => {
        const card = cardFactory.makeCard(toDo);
        appendRow(card.card);
        pushToMap(project, card);
    }

    const addAllToDo = (toDoMap) => {
        clearToDos();
        for (const [project, toDos] of toDoMap) {
            toDos.forEach(toDo => addToDo(project, toDo));
        }
    }

    const showAllToDo = () => {
        clearToDos();
        cards.values().forEach(list => {
            console.log(list);
            list.forEach(card => appendRow(card.card));
        })
    };
    
    const showProjectToDo = (project) => {
        clearToDos();
        const toDoRows = cards.get(project);
        toDoRows.forEach(row => appendRow(row.row));
    }

    const removeToDo = (id) => {
        const row = document.querySelector("#" + id);
        console.log(id);
        table.removeChild(row);
    }

    const clearToDos = () => {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
    }

    const getCards = () => {
        return cards;
    }

    const getCard = (project, id) => {
        return cards.get(project).find(r => r.card.id == id);
    }

    const appendRow = (row) => {
        table.appendChild(row);
    }

    const pushToMap = (project, rowObject) => {
        if (cards.has(project)) {
            cards.get(project).push(rowObject);
        } else {
            cards.set(project, []);
            cards.get(project).push(rowObject);
        }
    }
    
    return {
        addToDo,
        addAllToDo,
        showProjectToDo,
        showAllToDo,
        removeToDo,
        getCard,
        getCards,
    }
};