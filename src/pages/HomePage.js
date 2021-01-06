import Layout from '../components/Layout';
import Card from "../components/Card";

function HomePage() {
    return (
        <Layout id="home" title="Home">
            <Card>
                <input
                    type="search"
                    className="poke-search"
                    placeholder="Search for pokemon"
                />
                

            </Card>
        </Layout>
    )
}

export default HomePage;
