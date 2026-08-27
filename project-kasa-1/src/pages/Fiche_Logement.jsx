import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main_Logement from "../components/Main-Logement";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Fiche_Logement = () => {

    const { id } = useParams();

    const [logement, setLogement] = useState(null);

    useEffect(() => {

        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => { const logementSet = data.find((element) => element.id === id); 
            setLogement(logementSet);
        })
    }, [id]);

    return(

        <div className="main-container">

            <Nav />

            <Main_Logement element={logement} />

            <Footer />

        </div>

    );

    
    
};

export default Fiche_Logement;