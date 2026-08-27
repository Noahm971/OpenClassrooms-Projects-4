import Carrousel from "./Carrousel";
import Collapse from "./Collapse";

const Main_Logement = ({ element }) => {

    if (!element) {
        
        return <main>Chargement...</main>

    }

    const stickerArray = element.tags;
    const host = element.host;
    const rating = element.rating;
    const equipments = element.equipments;
    
    return(

        <main>

            <section className="carrousel">

                <Carrousel element={ element }/>

            </section>

            <section className="description">

                <div className="banner">

                    <div className="title-logement-container">

                        <h1 className="title-logement">{ element.title }</h1>

                        <p className="description-logement">{ element.location }</p>

                        <div className="sticker-container">

                            {stickerArray.map((element)=> {
                    
                                return <div key={element} className="sticker">{ element }</div>

                            })}

                        </div>

                    </div>

                    <div className="host-info">

                        <div className="host-name"> <p>{ host.name }</p> </div>

                        <div className="host-pic">
                            <img src={ host.picture } alt="Photo de l'hôte" />
                        </div>
                        
                        <div className="rating-container">
                            
                            {[1, 2, 3, 4, 5].map((element)=>(

                                <i className={`fa-xs fa-solid fa-star ${element <= rating ? "active-star" : ""}`} key={element} aria-hidden="true"></i>

                            ))}

                        </div>

                    </div>


                </div>

                

                <div className="collapse-logement">

                            <Collapse titleSpan="Description">

                                <p>{ element.description }</p>
                            
                            </Collapse>

                            <Collapse titleSpan="Équipements">
                            
                                {equipments.map((equipment) => {

                                    return <p className="equipment" key={ equipment }>{ equipment }</p>

                                })}
                            
                            </Collapse>

                </div>

            </section>

        </main>

    );

}

export default Main_Logement; 