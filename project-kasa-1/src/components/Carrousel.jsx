import { useState } from "react";

const Carrousel = ({ element }) => {

    const picturesArray = element.pictures;

    const [i, setI] = useState(0);

    function nextPicture() {

        if (i < picturesArray.length - 1) {
            setI(i + 1);
        } else {
            setI(0);
        }

    };

    function previousPicture() {

         if (i > 0) {
            setI(i - 1);
        } else {
            setI(picturesArray.length - 1);
        }

    };

    return(

        <div className="carrousel-container">

            {picturesArray.length > 1 && (

                <div className="arrow-left" onClick={previousPicture}>
                    <span className="left-first"></span>
                    <span className="left-second"></span>
                </div>

            )}

            <div className="picture-container">

                <img src={picturesArray[i]} alt={element.title}/>

            </div>

            {picturesArray.length > 1 && (

                <div className="arrow-right" onClick={nextPicture}>
                    <span className="right-first"></span>
                    <span className="right-second"></span>
                </div>

            )}

            {picturesArray.length > 1 && (

            <span className="pic-count">
                <p> {i + 1}/{picturesArray.length} </p>
            </span>

            )}     

        </div>

    );

};

export default Carrousel;