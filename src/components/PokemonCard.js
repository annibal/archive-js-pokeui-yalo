import PokemonFavoriteStar from "./PokemonFavoriteStar"

function PokemonCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <div className="image-row">
                <img src={pokemon.sprites.front_default} alt="pkmn" className="pokemon-image" />
            </div>
            <div className="details-row">
                <p className="pokemon-name-wrapper">
                    <span className="pokemon-number">{pokemon.id}</span>
                    <span className="pokemon-name">{pokemon.name}</span>
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
                        {stat.stat.name}: {stat.base_stat}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PokemonCard;
