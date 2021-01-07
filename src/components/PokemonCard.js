import { Link } from "react-router-dom";
import PokemonFavoriteStar from "./PokemonFavoriteStar"

const statMap = {
    "hp": "hp",
    "attack": "atk",
    "defense": "def",
    "special-attack": "sp",
    "special-defense": "sd",
    "speed": "spd",
}

function PokemonCard({ pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className="pokemon-card">
            <div className="image-row">
                <img src={pokemon.sprites.front_default} alt="pkmn" className="pokemon-image" />
            </div>
            <div className="details-row">
                <p className="pokemon-name-wrapper">
                    <span className="pokemon-name">{pokemon.name}</span>
                    <span className="pokemon-number">{pokemon.id}</span>
                    <PokemonFavoriteStar id={pokemon.id} />
                </p>
                <p className="pokemon-types">
                    {pokemon.types.map(type => (
                        <span className="pokemon-type">
                            {type.type.name}
                        </span>
                    ))}
                </p>
            </div>
            <div className="stats-row">
                {pokemon.stats.map(stat => (
                    <span className="pokemon-stat">
                        <span className="pokemon-stat-name">{statMap[stat.stat.name]}:</span>
                        <span className="pokemon-stat-value">{stat.base_stat}</span>
                    </span>
                ))}
            </div>
        </Link>
    );
}

export default PokemonCard;
