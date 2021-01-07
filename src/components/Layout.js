import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Layout({ children, id, title }) {
    return (
        <div className={id}>
            <Helmet>
                <title>{title} - Poke UI for Yalo</title>
            </Helmet>
            <div className="container">
                <Link to="/">
                    <Card>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                            alt="pokemon"
                            className="header-img header-img-left"
                        />
                        <img src="https://j9w6s3b3.stackpathcdn.com/wp-content/uploads/2019/07/yalo.jpg"
                            alt="yalo"
                            className="header-img header-img-right"
                        />
                    </Card>
                </Link>
                {children}
            </div>
        </div>
    )
}

export default Layout;
