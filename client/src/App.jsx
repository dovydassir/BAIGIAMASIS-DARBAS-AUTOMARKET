import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [editingId, sertEditingId] = useState(null);
 
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let url = "http://localhost:5000/api/cars";
    let method = "POST";

    if (editingId) {
      url = `http://localhost:5000/api/cars/${editingId}`;
      method = "PUT";
    }

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((savedCar) => {
      if (editingId) {
        setCars(cars.map((car) => (car._id === editingId ? savedCar : car)));
      } else {
        setCars([...cars, savedCar]);
      }
      
      setFormData({
        brand: "",
        model: "",
        year: "",
        price: "",
      });
    })
    .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
      setCars(cars.filter((car) => car._id !== id));
    })
    .catch((error) => console.log(error));

    };


    const handleEdit = (car) => {
      sertEditingId(car._id);
      setFormData({
        brand: car.brand,
        model: car.model,
        year: car.year,
        price: car.price,
      });
    };



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

      <div className="loyout">
        <aside className="sidebar">
          <h2>Informacija</h2>
          <p>valdyti automobiliu užklausas</p>
        </aside>

        <main className="content">
          <h2>Automobliai</h2>

          <form className="car-form" onSubmit={handleSubmit}>
            <h3>Pridėti Automobilį</h3>
            <input
            name="brand"
            placeholder="Markė"
            value={formData.brand}
            onChange={handleChange}
            />
            <input
            name="model"
            placeholder="Modelis"
            value={formData.model}
            onChange={handleChange}
            />
            <input
            name="year"
            placeholder="Metai"
            value={formData.year}
            onChange={handleChange}
            />
            <input
            name="price"
            placeholder="Kaina"
            value={formData.price}
            onChange={handleChange}
            />
            <button type="submit">Pridėti</button>
            

        
          </form>

          <div className="car-grid">
            {cars.length === 0 && <p>Automobilių nėra.</p>}

            {cars.map((car) => (
            <div className="car-card" key={car._id}>
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
              <button onClick={() => handleEdit(car)}>Redaguoti</button>
              <button onClick={() => handleDelete(car._id)}> Ištrinti</button>
            </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
      