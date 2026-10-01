import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="page">
      <header className="header">
        <h1>Auto Market</h1>
        <p>Automobilių skelbimai</p>
      </header>

      <nav className="menu">
        <a href="#">Pagrindinis</a>
        <span>|</span>
        <a href="#">Automobiliai</a>
        <span>|</span>
        <a href="#">Pridėti automobilį</a>
        <span>|</span>
        <a href="#">užklausos</a>
      </nav>

      <div className="loyaut">
        <aside className="sidebar">
          <h2>Informacija</h2>
          <p>valdyti automobiliu užklausas</p>
        </aside>

        <main className="content">
          <h2>Automobliai</h2>

          <div className="car-grid">
            {cars.length === 0 && <p>Automobilių nėra.</p>}

            {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <h3>
                 {car.brand} {car.model}
                 </h3>
              <p>
                <b>Metai :</b> {car.year}
                </p>
              <p> 
                <b>Kaina :</b> {car.price}
                </p>
              <button>Pažiūrėti</button>
            </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
      