import Layout from "../components/Layout";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Layout id="not-found" title="Not Found">
            <Card>
                <center>
                    404 Page not found
                    <br />
                    <Link to="/">Go home</Link>
                </center>
            </Card>
        </Layout>
    )
}

export default NotFound;
