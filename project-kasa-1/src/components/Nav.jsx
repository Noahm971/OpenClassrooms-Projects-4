import logo from "../assets/images/LOGO.png"

const Nav = () => {

    return(

        <nav>

            <div className="logo">
                <img src={logo} alt="Logo du site Kasa" />
            </div>

            <ul className="nav-elements">
                <li>
                    <a href="">Accueil</a>
                </li>
                <li>
                    <a href="">À Propos</a>
                </li>
            </ul>

        </nav>

    );

}

export default Nav;