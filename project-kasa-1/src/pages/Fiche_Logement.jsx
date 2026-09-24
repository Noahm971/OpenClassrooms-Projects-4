import Main_Logement from "../mains/Main-Logement";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Fiche_Logement = () => {

    const { id } = useParams();

    const [logement, setLogement] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => { 

            const logementById = data.find((logement) => logement.id === id);
            
            if (!logementById) {

                return navigate("/404");

            } else {

                setLogement(logementById);

            }            
        })}, [id]);

    return(

        <div className="main-container">

            <Main_Logement element={logement} />

        </div>

    );
       
};

export default Fiche_Logement;