import Layout from '../components/Layout';
import Card from "../components/Card";
import { getPokemon } from '../providers/pokemonProvider'
import {
    useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

function PokemonPage() {
    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState();
    useEffect(() => {
        getPokemon(pokemonId).then(pokemon => setPokemon(pokemon))
    }, [pokemonId])

    return (
        <Layout id="pokemon-page" title={`#${pokemonId} poke page`}>
            {pokemon && (
                <Card>
                    <PokemonCard pokemon={pokemon} />
                    <div className="pokemon-moves">
                        <span className="pokemon-moves-title">Moves:</span>
                        {pokemon.moves.map(move => (
                            <div className="pokemon-move">
                                <span className="pokemon-move-name">{move.move.name}</span>
                                <div className="pokemon-move-manners-col">
                                    {move.version_group_details.map(version => (
                                        <div className="pokemon-move-manners">
                                            <span className="pokemon-manner-version">
                                                <b>Version:</b> {version.version_group.name}
                                            </span>
                                            <span className="pokemon-manner-method">
                                                <b>Learning Method:</b> {version.move_learn_method.name}
                                            </span>
                                            <span className="pokemon-manner-level">
                                                <b>Learned LVL:</b> {version.level_learned_at}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}
        </Layout>
    )
}

export default PokemonPage