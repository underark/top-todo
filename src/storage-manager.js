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
}