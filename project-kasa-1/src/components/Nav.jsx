import logo from "../assets/images/LOGO.svg";
import { Link } from "react-router-dom";


const Nav = () => {

    return(
        
        <header>

            <nav>

                <div className="logo-site">

                    <img src={logo} alt="Logo du site Kana" />

                </div>

                <ul className="navbar">

                    <li>
                        <Link to="/">Accueil</Link>
                    </li>

                    <li>
                        <Link to="/about">À propos</Link>
                    </li>

                </ul>

            </nav>

        </header>
        
    );

}

export default Nav;