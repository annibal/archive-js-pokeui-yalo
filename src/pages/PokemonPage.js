import Layout from '../components/Layout';
import Card from "../components/Card";
import { getPokemon } from '../providers/pokemonProvider'
import {
    useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

function PokemonPage() {
    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        getPokemon(pokemonId).then(pokemon => setPokemon(pokemon))
    }, [])

    return (
        <Layout id="pokemon-page" title={`#${pokemonId} poke page`}>
            <Card>
                <p>TODO: Improve page</p>
                <code>
                    {JSON.stringify(pokemon, null, 2)}
                </code>
            </Card>
        </Layout>
    )
}

export default PokemonPage