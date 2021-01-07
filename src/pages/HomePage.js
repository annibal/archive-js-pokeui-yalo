import { useEffect, useState } from 'react';
import { getHomePokemons, listPokemons } from '../providers/pokemonProvider'
import Layout from '../components/Layout';
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import useDebounce from '../components/useDebounce';

function HomePage() {
    const [pokemons, setPokemons] = useState([]);
    const [pokeSearch, setPokeSearch] = useState('');
    const [qtd, setQtd] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    useEffect(() => {
        getHomePokemons().then(pokemons => {
            setPokemons(pokemons)
            setIsLoading(false)
        })
    }, [])

    const d_PokeSearch = useDebounce(pokeSearch, 500);

    useEffect(
        () => {
            if (d_PokeSearch && d_PokeSearch.length > 2) {
                setIsLoading(true);
                listPokemons(d_PokeSearch).then(pokemons => {
                    setIsLoading(false);
                    setPokemons(pokemons);
                    setQtd(10);
                });
            } else {
                setPokemons([]);
            }
        },
        [d_PokeSearch]
    );

    const handleLoadMore = () => {
        setIsLoadingMore(true)
        const newQtd = qtd + 10
        setQtd(newQtd);
        listPokemons(d_PokeSearch, 0, newQtd).then(pokemons => {
            setIsLoadingMore(false);
            setPokemons(pokemons);
        });
    }

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
                    onChange={e => setPokeSearch(e.target.value)}
                />

                {isLoading && (<div className="not-ready">Loading...</div>)}
                {!isLoading && pokemons.length === 0 && (<div className="not-ready">No pokemon found</div>)}
                {!isLoading && pokemons.length > 0 && pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id+'-'+pokemon.name} pokemon={pokemon} />
                ))}
                {!isLoading && pokemons.length > 0 && d_PokeSearch.length > 2 && (
                    <div className="load-more-container">
                        {isLoadingMore
                            ? (<div className="not-ready">Loading more...</div>)
                            : (
                            <button className="load-more" onClick={handleLoadMore}>
                                Load more
                            </button>
                        )}
                    </div>
                )}
            </Card>
        </Layout>
    )
}

export default HomePage;
