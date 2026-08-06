import Card from "./Card";

const tab = [0, 1, 2, 3, 4, 5];

const listItems = tab.map((element) => 

    <Card />

);

const MainHome = () => {

    return(

        <main>

            <section className="presentation">

                <div className="presentation-background">

                    <h1>Chez vous, partout et ailleurs</h1>

                </div>

            </section>

            <section className="accomodation">

                <div className="grid-container">

                    {listItems}
                    
                </div>

            </section>

        </main>

    );

}

export default MainHome;