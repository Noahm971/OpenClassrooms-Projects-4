import img from "../assets/images/IMG2.png"
import Collapse from "./Collapse";

const MainAbout = () => {

    return(

        <main>

            <section className="header-img">

                <div className="img-container">

                    <div className="img"></div>

                </div>

            </section>

            <section className="main-content">

                <div className="collapse-container">

                    <Collapse titleSpan="Fiabilité">
                        <p>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                            et toutes les informations sont régulièrement vérifiées par nos équipes
                        </p>
                    </Collapse>

                    <Collapse titleSpan="Respect">

                        <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                            perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
                        
                    </Collapse>

                    <Collapse titleSpan="Service">

                        <p>
                            La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
                            que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect de bienveillance.
                        </p>
                        
                    </Collapse>

                    <Collapse titleSpan="Sécurité">

                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
                            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au 
                            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                        
                    </Collapse>

                </div>

            </section>

        </main>

         

    );

}

export default MainAbout;