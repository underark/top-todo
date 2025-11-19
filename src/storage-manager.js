export class StorageManager {
    storageAvailable() {
        let storage;
        try {
            storage = window["localStorage"];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                storage &&
                storage.length() !== 0
            );
        }
    }

    storageIsEmpty() {
        return localStorage.length == 0;
    }

    writeToStorage(projectsMap) {
        for (const project of projectsMap) {
            localStorage.setItem(project[0], JSON.stringify(project[1]));
        }
        console.log(localStorage);
    }

    readFromStorage() {
        const m = new Map();
        Object.keys(localStorage).forEach(project => {
            const tasks = localStorage.getItem(project);
            m.set(project, JSON.parse(tasks));
        });
        console.log(m);
        return m;
    }
}