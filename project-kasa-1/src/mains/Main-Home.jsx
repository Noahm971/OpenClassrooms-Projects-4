import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const MainHome = () => {

    const [logements, setLogements] = useState([]);

    useEffect(() => {

        fetch("/data.json")
        .then((res)=> {

            if (!res.ok) {

                return <Navigate to="/404" replace/>;

            } else {

                return res.json();

            }

        })
        .then((data) => setLogements(data))

    }, []);

    return(

        <main>

            <section className="presentation">

                <div className="presentation-background">

                    <h1>Chez vous, partout et ailleurs</h1>

                </div>

            </section>

            <section className="accomodation">

                <div className="grid-container">

                    {logements.map((element)=> {
                    
                        return <Card element={element} key={element.id}/>

                    })}
                    
                </div>

            </section>

        </main>

    );

}

export default MainHome;