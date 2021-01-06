import Layout from '../components/Layout';
import Card from "../components/Card";
import {
    useParams
} from "react-router-dom";

function PokemonPage() {
    let { pokemonId } = useParams();

    return (
        <Layout id="pokemon-page" title={`#${pokemonId} poke page`}>
            <Card>
                Page for pokemon {pokemonId}
            </Card>
        </Layout>
    )
}

export default PokemonPage