import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarGallery from "../components/CarGallery";

function CarDetailsPage() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch(`http://localhost:5000/api/cars/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Nepavyko gauti automobilio");
            }
            return res.json();
        })
        .then((data) => setCar(data))
        .catch((error) => setError(error.message));
        }, [id]);
    if (error) {
        return <p className="error-message">{error}</p>
    }
    if (!car) {
        return <p>Kraunama automobilio informacija...</p>
    }
    return (
        <div>
            <CarGallery imageName={car.imageUrl} />
            
            <h2>{car.brand} {car.model}</h2>

            <p><b>Metai:</b>{car.year}</p>
            <p><b>Kaina:</b>{car.price}</p>
            <p><b>Kuro tipas:</b>{car.fuel}</p>
            <p><b>Rida:</b>{car.mileage}</p>
            <p><b>Aprašymas:</b>{car.description}</p>
            
            
        </div>
    )
    }

export default CarDetailsPage