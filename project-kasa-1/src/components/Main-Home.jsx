import Card from "./Card";
import { useState, useEffect } from "react";

const MainHome = () => {

    const [logements, setLogements] = useState([]);

    useEffect(() => {

        fetch("/data.json").then((res)=> res.json()).then((data) => setLogements(data))

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