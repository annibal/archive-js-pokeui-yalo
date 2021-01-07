import { useEffect, useState } from "react"
import { isFavorite, changeFavorite } from "../providers/favoritesProvider";

function PokemonFavoriteStar({ id, onChangeFavorite = () => {} }) {
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        if (isFavorite(id)) {
            setFavorite(true);
        }
    }, [id]);

    const handleFavoriteClick = event => {
        changeFavorite(id);
        const newFav = !favorite
        setFavorite(newFav);
        onChangeFavorite(newFav);
        
        event.preventDefault();
    }

    return (
        <span
            className={`pokemon-favorite pokemon-favorite-${favorite ? 'true' : 'false'}`}
            onClick={handleFavoriteClick}
        >
            {favorite ? '★' : '☆'}
        </span>
    );
}

export default PokemonFavoriteStar;
