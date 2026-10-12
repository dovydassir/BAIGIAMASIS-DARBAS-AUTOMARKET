function CarsPage({ cars, handleEdit, handleDelete, CarCard }) {
    return (
        <div>
            <h2>Automobiliu sarasas</h2>

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