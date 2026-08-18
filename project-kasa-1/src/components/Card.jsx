const Card = ({ element }) => {

    return(

        <div className='accomodation-cards' key={element.id}>
            <p className="text-gallery">{element.title}</p>
            <div className="img-container">

                <img className="img-gallery" src={element.cover} alt={element.title}></img>

            </div>
            
        </div>

    );

};

export default Card;