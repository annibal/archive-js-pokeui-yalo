const localStorageProvider = key => ({
    fromStore: () => {
        const item = localStorage.getItem(key);
        if (item != null) {
            try {
                return JSON.parse(item);
            } catch(e) {}
        }
    },
    toStore: (data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
});

export default localStorageProvider