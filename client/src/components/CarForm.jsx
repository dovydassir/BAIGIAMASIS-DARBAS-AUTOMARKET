
function Carform({ formData, handleChange, handleSubmit, editingId }) {
    return (
        <form  className="car-form" onSubmit={handleSubmit}>
            <h3>Pridėti Automobilį</h3>
            <input
            name="brand"
            required
            placeholder="Markė"
            value={formData.brand}
            onChange={handleChange}
            />
            <input
            name="model"
            required
            placeholder="Modelis"
            value={formData.model}
            onChange={handleChange}
            />
            <input
            type="number"
            required
            min="1990"
            max={new Date().getFullYear()+1}
            name="year"
            placeholder="Metai"
            value={formData.year}
            onChange={handleChange}
            />
            <input
            type="number"
            required
            name="price"
            min="0"
            placeholder="Kaina"
            value={formData.price}
            onChange={handleChange}
            />
            <input
            name="fuel"
            required
            placeholder="Kuro tipas"
            value={formData.fuel}
            onChange={handleChange}
            />
            <input
            type="number"
            required
            min="0"
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
                
                <option value="">Pasirinkite nuotrauką (neprivaloma)</option>
                <option value="Audi">Audi A8</option>
                <option value="BMW">BMW 3 series</option>
                <option value="Mercedes-Benz">Mercedes-Benz GLC</option>
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