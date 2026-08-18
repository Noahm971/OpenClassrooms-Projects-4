import { Link } from "react-router-dom";

const MainError = () =>{

    return(

        <main>

            <div className="msg-container">

                <h1 className="error-title">404</h1>

                <h2 className="error-msg">Oups! La page que vous demandez n'existe pas.</h2>

                <a href="#"><Link to="/">Retourner sur la page d'accueil</Link></a> 

            </div>

        </main>

    );

}

export default MainError;