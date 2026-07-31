import logo from "../assets/images/LOGO.svg";
const Footer = () => {

    return(

        <footer>

            <div className="footer-container">

                <div className="logo-site-footer">
                    <img src={logo} alt="Logo du site Kana" />
                </div>

                <p>© 2020 Kasa. All rights reserved</p>

        </div>

        

        </footer>

    );

}

export default Footer;