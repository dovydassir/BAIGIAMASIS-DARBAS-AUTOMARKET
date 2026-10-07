
function Carform({ formData, handleChange, handleSubmit, editingId }) {
    return (
        <form  className="car-form" onSubmit={handleSubmit}>
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
            type="number"
            name="year"
            placeholder="Metai"
            value={formData.year}
            onChange={handleChange}
            />
            <input
            type="number"
            name="price"
            placeholder="Kaina"
            value={formData.price}
            onChange={handleChange}
            />
            <input
            name="fuel"
            placeholder="Kuro tipas"
            value={formData.fuel}
            onChange={handleChange}
            />
            <input
            type="number"
            name="mileage"
            placeholder="Rida"
            value={formData.mileage}
            onChange={handleChange}
            />
            <select
            name="imageUrl"
            placeholder="Nuotraukos"
            value={formData.imageUrl}
            onChange={handleChange}
            >
                
                <option value="">Pasirinkite nuotrauką</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
            <input
            name="description"
            placeholder="Aprašymas"
            value={formData.description}
            onChange={handleChange}
            />

          
            <button type="submit">
              {editingId ? "Išsaugoti" : "Pridėti"}
            </button>
            
        </form>
    );
}

export default Carform;