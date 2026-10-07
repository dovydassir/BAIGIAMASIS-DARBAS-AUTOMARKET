import { useEffect, useState } from "react";
import "./App.css";
import CarCard from "./components/CarCard";
import CarForm from "./components/CarForm";

function App() {
  const [cars, setCars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
 
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    fuel: "",
    mileage: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
    .then((res) => res.json())
    .then((data) => setCars(data))
    .catch((error) => console.log(error));
    }, []);
 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    

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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Nepavyko sukurti automobilio");
      }
    })
    .then((savedCar) => {
      if (editingId) {
        setCars(cars.map((car) => (car._id === editingId ? savedCar : car)));
        setEditingId(null);
      } else {
        setCars([...cars, savedCar]);
      }
      
      setFormData({
        brand: "",
        model: "",
        year: "",
        price: "",
        fuel: "",
        mileage: "",
        imageUrl: "",
        description: "",
      });
    })
    .catch((error) => {
      console.log(error);
      setError("Patikrinkite pagaminimo metus, kainą ir ridos rodiklį. Tai turi būti skaičiai.");
    });
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
      setEditingId(car._id);
      setFormData({
        brand: car.brand,
        model: car.model,
        year: car.year,
        price: car.price,
        fuel: car.fuel,
        mileage: car.mileage,
        imageUrl: car.imageUrl,
        description: car.description,
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

          {error && <p className="error-message">{error}</p>}

          <CarForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editingId={editingId}
          />

          <div className="car-grid">
            {cars.length === 0 && <p>Automobilių nėra.</p>}

            {cars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            ))}
          </div>

            
          
          
        
        </main>
      </div>
    </div>
  );
}

export default App;
      