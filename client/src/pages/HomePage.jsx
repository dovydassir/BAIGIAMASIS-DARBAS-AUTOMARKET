import { Link } from "react-router-dom";
import homeImage from "../pictures/Audi.jpg";
import "./HomePage.css";
import CarCard from "../components/CarCard";

function HomePage({cars = []}) {

    const latestCars = [...cars]
    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0,3);

    return(
        <div>
            <section className="home-hero">
                <div className="home-text">
                    <h1>Atrask savo kitą automobilį</h1>


                    <p>
                        Peržiūrėk automobilių skelbimus, jų duomenis ir
                        nuotraukas. Radęs dominantį automobilį, palik užklausą.
                    </p>

                    <Link to="/cars" className="home-link">
                    Peržiūrėti automobilius
                    </Link>
                </div>

                <img
                src={homeImage}
                alt="Pilkas audi automobilis"
                className="home-image"
                />
            </section>

            <section className="home-info">
                <section className="home-info">
                    <h2>Naujausi skelbimai</h2>

                    <div className="car-grid">
                        {latestCars.length === 0 && <p>Skelbimų dar nėra</p>}
                        {latestCars.map((car) => (
                            <CarCard key={car._id} car={car} />
                        ))}

                    </div>
                </section>
                <h2>Kaip naudotis svetaine?</h2>

                <div className="home-steps">
                    <article>
                        <h3>1. Išsirink automobilį</h3>
                        <p>
                            Automobilių saraše pažiūrėk siūlomus modelius ir jų kainas.
                        </p>
                    </article>

                    <article>
                        <h3>2. Pažiūrėk Informaciją</h3>
                        <p>
                            Atidaryk skelbimą ir susipažink su automobilio duomenimis bei nuotraukomis.
                        </p>
                    </article>

                    <article>
                        <h3>3. Palik užklausą</h3>
                        <p>
                            Užklausų puslapyje pasirink automibilį, užpildyk kontaktinius duomenis ir parašyk žinutę.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default HomePage