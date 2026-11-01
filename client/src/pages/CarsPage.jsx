function CarsPage({ cars, handleEdit, handleDelete, CarCard, carsError }) {
    return (
        <div>
            <h2>Automobilių sąrašas</h2>

            {carsError && <p className="error-message">{carsError}</p>}

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
        </div>
    )
}

export default CarsPage