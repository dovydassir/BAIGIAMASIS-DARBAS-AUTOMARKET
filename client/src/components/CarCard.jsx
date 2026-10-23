import { Link, useNavigate } from "react-router-dom";
import audiImage from "../pictures/Audi.jpg";
import bmwImage from "../pictures/BMW.jpg";
import mercedesImage from "../pictures/Mercedes-Benz.jpg";
import fordImage from "../pictures/Ford.jpg";
import toyotaImage from "../pictures/Toyota.jpg";
import hondaImage from "../pictures/Honda.jpg";
import kiaImage from "../pictures/Kia.jpg";
import mitsuubishiImage from "../pictures/Mitsubishi.jpg";
import peugotImage from "../pictures/Peugeot.jpg";
import skodaImage from "../pictures/Skoda.jpg";
import volkswagenImage from "../pictures/Volkswagen.jpg";



function CarCard({car, onEdit, onDelete}) {
  const navigate = useNavigate();  
  const Images = {
  Audi: audiImage,
  BMW: bmwImage,
  "Mercedes-Benz": mercedesImage,
  Ford: fordImage,
  Toyota: toyotaImage,
  Honda: hondaImage,
  Kia: kiaImage,
  Mitsubishi: mitsuubishiImage,
  Peugeot: peugotImage,
  Skoda: skodaImage,
  Volkswagen: volkswagenImage,
  };

    const carImage = Images[car.imageUrl];

    const description = car.description?.trim() || "";
const words = description.split(/\s+/).filter(Boolean);
const hasMore = words.length > 15;

const shortDescription =
  words.slice(0, 15).join(" ") + (hasMore ? "…" : "");

     
    
    return (
        <div className="car-card">
              <h3>
                 {car.brand} {car.model}
                 </h3>
                 {carImage && (
                        <img src={carImage} alt={car.brand} className="car-image" />
                        )}
              <p>
                <b>Metai :</b> {car.year}
                </p>
              <p> 
                <b>Kaina :</b> {car.price}
                </p>
              <p>
                <b>Kuro tipas :</b> {car.fuel}
              </p>
              <p>
                <b>Rida :</b> {car.mileage}
              </p>
              <p>
                 <b>Aprašymas:</b> {shortDescription}{" "}
                 {hasMore && <Link to={`/cars/${car._id}`} className="read-more"> Skaityti daugiau...</Link>}
              </p>
              
              <button onClick={() => navigate(`/cars/${car._id}`)}> Pažiūrėti</button>
              {onEdit && (
              <button onClick={() => onEdit(car)}>Redaguoti</button> 
              )}
              {onDelete && (
              <button onClick={() => onDelete(car._id)}> Ištrinti</button>
              )}
        </div>
    );
}

export default CarCard;