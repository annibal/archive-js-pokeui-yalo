import { useCallback, useEffect, useState } from "react"
import { isFavorite, changeFavorite } from "../providers/favoritesProvider";

function PokemonFavoriteStar({ id }) {
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        if (isFavorite(id)) {
            setFavorite(true);
        }
    }, [id]);

    const handleFavoriteClick = () => {
        changeFavorite(id);
        setFavorite(!favorite);
    }

    return (
        <span
            className={`pokemon-favorite pokemon-favorite-${favorite ? 'true' : 'false'}`}
            onClick={() => handleFavoriteClick(id)}
        >
            {favorite ? '★' : '☆'}
        </span>
    );
}

export default PokemonFavoriteStar;
