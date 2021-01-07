import axios from 'axios'
import localStorageProvider from './localStorageProvider';

const { fromStore, toStore } = localStorageProvider('pokeyalo');

const getPokeStore = async () => {
    let pokeStore = fromStore();

    if (pokeStore == null) {
        console.log("populating pokeStore")
        let data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1')
        const count = data?.data?.count || 2000;
        pokeStore = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
        pokeStore = pokeStore?.data?.results.map(p => ({
            name: p.name,
            url: p.url,
            id: p.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/',''),
        })).reduce((all, curr) => ({
            ...all,
            [curr.id]: curr
        }), {});
        toStore(pokeStore);
    }
    
    return pokeStore;
}

const getPokemonMemoized = async (pokeId) => {
    const pokeStore = await getPokeStore();

    const hasItem = pokeStore[pokeId]?.cached;

    if (!hasItem) {
        console.log('memoizing data for pokemon #'+pokeId);
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            pokeStore[pokeId] = data?.data;
            pokeStore[pokeId].exists = true;
        } catch(e) {
            console.log("failed")
        }
        pokeStore[pokeId].cached = true;
        console.log({newStore: pokeStore});
        toStore(pokeStore);
    }

    return pokeStore[pokeId];
}

export const listPokemons = async (search, page = 0, items = 10) => {
    const pokeStore = await getPokeStore();
    console.log({pokeStore})

    const foundPokemons = Object.values(pokeStore)
        .filter(p => p != null)
        .filter(p => p.name.includes(search) || search == null)
        .map(p => p.id)
        .slice(page*items, (page+1)*items);
    console.log({foundPokemons})

    for (let i=0; i<foundPokemons.length; i++) {
        foundPokemons[i] = await getPokemonMemoized(foundPokemons[i]);
    }
    return foundPokemons.filter(pokemon => pokemon.exists);
}

export const getHomePokemons = async () => {
    return await listPokemons();
}

export const getPokemon = async (id) => {
    return await getPokemonMemoized(id)
}