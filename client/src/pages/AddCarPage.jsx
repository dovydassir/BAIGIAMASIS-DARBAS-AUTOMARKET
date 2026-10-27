function AddCarPage({ error, CarForm, formData, handleChange, handleSubmit, editingId }) {
    return (
        <div>
            <h2>
            {editingId ? "Redaguoti automobilį" : "Pridėti automobilį"}
            </h2>

            {error && <p className="error-message">{error}</p>}

            <div className="form-info">
            <p> Užpildykite automobilio duomenis.</p>

            <p>Privalomi laukai: Markė, Modelis, Metai, Kaina, Kuro tipas ir Rida.</p>

            <p>  Galite pasirinkti vieną iš pavyzdinių automobilių nuotraukų
            galerijų. Jei jūsų automobiliui tinkamos galerijos nėra,
            skelbimą galima pridėti be nuotraukų.
            </p>

            </div>



            <CarForm

            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editingId={editingId}
            />  


        </div>
    );
}

export default AddCarPage