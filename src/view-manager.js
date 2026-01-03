
// This is a factory function because we want to make the container private but pass the functions around later
export function ViewManager(selector) {
    const cardContainer = document.querySelector(selector);

    const showCard = (card) => {
        cardContainer.appendChild(card);
    }

    const removeCard = (id) => {
        const card = document.querySelector("#" + id);
        console.log(card);
        cardContainer.removeChild(card);
    }

    const showCards = (array) => {
        array.forEach(card => showCard(card));
    }
    
    const clearCards = () => {
        while (cardContainer.firstChild) {
            cardContainer.removeChild(cardContainer.lastChild);
        }
    }
    
    return {
        showCard,
        removeCard,
        showCards,
        clearCards,
    }
};