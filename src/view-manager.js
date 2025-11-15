// This is a factory function because we want to make the tbody private but pass the functions around later
export function ViewManager(selector) {
    const table = document.querySelector(selector);

    const appendRow = (row) => {
        table.appendChild(row);
    }

    const removeRow = (id) => {
        const row = document.querySelector("#" + id);
        table.removeChild(row);
    }
    
    return {
        appendRow,
        removeRow,
    }
};