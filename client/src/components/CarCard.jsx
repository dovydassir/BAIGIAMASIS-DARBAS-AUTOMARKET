function CarCard({car, onEdit, onDelete}) {
    return (
        <div className="car-card">
              <h3>
                 {car.brand} {car.model}
                 </h3>
                 {car.imageUrl && (
                        <img src={car.imageUrl} alt={car.brand} className="car-image" />
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
                <b>Aprasymas :</b> {car.description}
              </p>
              
              <button>Pažiūrėti</button>
              <button onClick={() => onEdit(car)}>Redaguoti</button>
              <button onClick={() => onDelete(car._id)}> Ištrinti</button>
        </div>
    );
}

export default CarCard;