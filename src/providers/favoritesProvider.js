import localStorageProvider from './localStorageProvider';

const { fromStore, toStore } = localStorageProvider('pokeyalo-favs');

const upd = updater => toStore(updater(fromStore() || {}));

export const addFavorite = id => upd(favs => {
    favs[id] = true;
    return favs;
});

export const removeFavorite = id => upd(
    favs => Object.keys(favs)
        // eslint-disable-next-line eqeqeq
        .filter(key => key != id)
        .reduce((all, curr) => ({
            ...all,
            [curr]: true
        }), {})
    );

export const isFavorite = id => !!(fromStore() || {})[id];

export const changeFavorite = id => {
    if (isFavorite(id)) {
        removeFavorite(id);
    } else {
        addFavorite(id);
    }
}

export const getFavorites = () => Object.keys(fromStore() || {})