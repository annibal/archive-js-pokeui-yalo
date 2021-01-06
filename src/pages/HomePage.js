import Layout from '../components/Layout';
import Card from "../components/Card";

function HomePage() {
    return (
        <Layout id="home" title="Home">
            <Card>
                Some presentation thing
            </Card>
            <Card>
                Search for pokemons
            </Card>
            <Card>
                Pokemon result list
            </Card>
        </Layout>
    )
}

export default HomePage;
