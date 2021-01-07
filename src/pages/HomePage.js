import { useEffect, useState } from 'react';
import { getHomePokemons } from '../providers/pokemonProvider'
import Layout from '../components/Layout';
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

function HomePage() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getHomePokemons().then(pokemons => setPokemons(pokemons))
    }, [])

    return (
        <Layout id="home" title="Home">
            <Card>
                <div className="home-links">
                    <Link to="favorites">Favorites</Link>
                    <Link to={`pokemon/${Math.floor(Math.random()*150)}`}>I'm lucky</Link>
                </div>
                <input
                    type="search"
                    className="poke-search"
                    placeholder="Search for pokemon"
                />
                
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Card>
        </Layout>
    )
}

export default HomePage;
