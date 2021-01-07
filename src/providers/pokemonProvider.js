import axios from 'axios'
import localStorageProvider from './localStorageProvider';

const { fromStore, toStore } = localStorageProvider('pokeyalo');

const getPokeStore = async () => {
    let pokeStore = fromStore();

    if (pokeStore == null) {
        let data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1')
        const count = data?.data?.count || 2000;
        pokeStore = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
        pokeStore = pokeStore?.data?.results;
        toStore(pokeStore);
    }
    
    return pokeStore;
}

const getPokemonMemoized = async (pokeId) => {
    const pokeStore = await getPokeStore();

    const hasItem = pokeStore[pokeId]?.weight != null;

    if (!hasItem) {
        console.log('memoizing data for pokemon #'+pokeId);
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        pokeStore[pokeId] = data?.data
        toStore(pokeStore);
    }

    return pokeStore[pokeId];
}

export const listPokemons = async (search, page = 0, items = 10) => {
    const pokeStore = await getPokeStore();
    const foundPokemons = pokeStore
        .map((p,i) => ({ name: p.name, number: i+1 }))
        .filter(p => p.name.includes(search) || search == null)
        .map(p => p.number)
        .slice(page*items, (page+1)*items);

    for (let i=0; i<foundPokemons.length; i++) {
        foundPokemons[i] = await getPokemonMemoized(foundPokemons[i]);
    }
    return foundPokemons;
}

export const getHomePokemons = async () => {
    return await listPokemons();
}

export const getPokemon = async (id) => {
    return await getPokemonMemoized(id)
}