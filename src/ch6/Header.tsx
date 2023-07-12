import { Link } from "react-router-dom";
import logo from "../assets/vite.svg"

function Header() {
    return (
        <header>
            <img src={logo}/>
            <h1> React Tools </h1>
            <nav>
                <Link to="products">
                    Products
                </Link>
            </nav>
        </header>
    )
}

export default Header;