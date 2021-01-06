import Layout from '../components/Layout';
import Card from "../components/Card";

function FavoritePokemon() {
    return (
        <Layout id="favorites" title="Favorites">
            <Card>
                My Favorites
            </Card>
            <Card>
                Pokemon result list
            </Card>
        </Layout>
    )
}

export default FavoritePokemon;
