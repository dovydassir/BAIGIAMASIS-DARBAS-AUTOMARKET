import {  useEffect, useState } from "react";
import "./App.css";
import CarCard from "./components/CarCard";
import CarForm from "./components/CarForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddCarPage from "./pages/AddCarPage";
import CarsPage from "./pages/CarsPage";
import InquiriesPage from "./pages/InquiriesPage";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";
import Menu from "./components/Menu";


function App() {
  const [cars, setCars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquiries, setInquiries] = useState([]);
  const [inquiryEditingId, setInquiryEditingId] = useState(null);
  const navigate = useNavigate();
  const [inquiryError, setInquiryError] = useState("");
    
  

  const [inquiryForm, setInquiryForm] = useState({
    car: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  

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
    .then((res) => {
      if (!res.ok) {
        throw new Error("Nepavyko gauti duomenų");
      }
      return res.json();
    })
    .then((data) => setCars(data))
    .catch((error) => console.log(error));
    }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/inquiries")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Nepavyko gauti duomenų");
      }
      return res.json();
    })
    .then((data) => setInquiries(data))
    .catch((error) => console.log(error));
    }, []);
 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInquiryChange = (event) => {
    setInquiryForm({
      ...inquiryForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleInquiryEdit = (inquiry) => {
    setInquiryEditingId(inquiry._id);
    setInquiryForm({
      car: inquiry.car?._id || "",
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone,
      message: inquiry.message,
    });
    setInquiryMessage("");
  }

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

  const handleInquirySubmit = (event) => {
    event.preventDefault();
    setInquiryMessage("");
    setInquiryError("");
    let url = "http://localhost:5000/api/inquiries"; 
    let method = "POST";

    if (inquiryEditingId) {
      url = `http://localhost:5000/api/inquiries/${inquiryEditingId}`;
      method = "PUT";
    }

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryForm),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Nepavyko sukurti užklausų");
      }
    })
    .then(() => {

      setInquiryEditingId(null);
      setInquiryForm({
        car: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setInquiryMessage("Užklausa išsaugota sėkmingai.");
      
      fetch("http://localhost:5000/api/inquiries")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Nepavyko gauti duomenų");
        }
        return res.json();
      })
      .then((data) => setInquiries(data))
      .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
      setInquiryError("Nepavyko išsaugoti užklausos. Pabandykityte dar karta.");
    });
  };

  const handleInquiryDelete = (id) => {
    setInquiryMessage("");
    setInquiryError("");
    fetch(`http://localhost:5000/api/inquiries/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Nepavyko ištrinti užklausos");
      }
      return res.json();
    })
    .then(() => {
      setInquiries(inquiries.filter((inquiry) => inquiry._id !== id));
    })
    .catch((error) => {
    console.log(error);
    setInquiryError(
      "Nepavyko ištrinti užklausos. Pabandykite dar karta."
    );
    });     
  } 

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Nepavyko ištrinti automobilių");
      }
      return res.json();
    })
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
      navigate("/add-car");
    };

    const resetCarForm = () => {
      setEditingId(null);
      setError("");
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
    };



  return (
    <div className="page">
      <header className="header">
        <h1>Auto Market</h1>
        <p>Automobilių skelbimai</p>
      </header>

      <Menu resetCarForm={resetCarForm} />

      <div className="loyout">

        <main className="content">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
            path="/cars"
            element={
              <CarsPage
                cars={cars}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                CarCard={CarCard}
              />
            }
            />
            <Route
            path="/add-car"
            element={
              <AddCarPage
                error={error}
                CarForm={CarForm}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editingId={editingId}
              />
            }
            />
            <Route path="/inquiries" 
            element={
            <InquiriesPage 
            cars={cars}
            inquiries={inquiries}
            inquiryForm={inquiryForm}
            inquiryMessage={inquiryMessage}
            handleInquiryChange={handleInquiryChange}
            handleInquirySubmit={handleInquirySubmit}
            handleInquiryDelete={handleInquiryDelete}
            handleInquiryEdit={handleInquiryEdit}
            inquiryEditingId={inquiryEditingId}
            inquiryError={inquiryError}

            
            />
            }
            />
            <Route path="/cars/:id" element={<CarDetailsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
      