import { Link } from "react-router-dom"

const Card = ({ element }) => {

    return(

        <Link to={`/Fiche_Logement/${element.id}`}>
            <div className='accomodation-cards' id={element.id}>
                <p className="text-gallery">{element.title}</p>
                <div className="img-container">
                    <img className="img-gallery" src={element.cover} alt={element.title}></img>
                </div>
            </div>
        </Link>

    );
    

};

export default Card;