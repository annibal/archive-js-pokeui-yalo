import localStorageProvider from './localStorageProvider';

const { fromStore, toStore } = localStorageProvider('pokeyalo-favs');

const upd = updater => toStore(updater(fromStore()));

export const addFavorite = id => upd(favs => {
    favs[id] = true;
    return favs;
});

export const removeFavorite = id => upd(
    favs => Object.keys(favs)
        .filter(key => key !== id)
        .reduce((all, curr) => ({
            [curr]: true
        }), {})
    );