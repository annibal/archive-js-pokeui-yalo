import Layout from '../components/Layout';
import Card from "../components/Card";
import { useEffect, useState } from 'react';
import { getFavorites } from '../providers/favoritesProvider';
import { getPokemon } from '../providers/pokemonProvider';
import PokemonCard from '../components/PokemonCard';

function FavoritePokemon() {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getFavoritePokemons() {
            const favIds = getFavorites();
            const favoritePokemons = [];
            for (let i=0; i<favIds.length; i++) {
                favoritePokemons.push(await getPokemon(favIds[i]))
            }
            setFavorites(favoritePokemons);
            setIsLoading(false);
        }
        getFavoritePokemons();
    }, [])

    return (
        <Layout id="favorites" title="Favorites">
            <Card>
                <span class="my-favs">My Favorites</span>
                {isLoading && (<div className="not-ready">Loading...</div>)}
                {!isLoading && favorites.length === 0 && (<div className="not-ready">No favorite added</div>)}
                {!isLoading && favorites.length > 0 && favorites.map(pokemon => (
                    <PokemonCard key={pokemon.id+'-'+pokemon.name} pokemon={pokemon} />
                ))}
            </Card>
        </Layout>
    )
}

export default FavoritePokemon;
