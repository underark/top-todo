
// This is a factory function because we want to make the container private but pass the functions around later
export function ViewManager(selector) {
    const cardContainer = document.querySelector(selector);

    const showCard = (card) => {
        console.log(cardContainer);
        cardContainer.appendChild(card);
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
        showCards,
        clearCards,
    }
};