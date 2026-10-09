function AddCarPage({ error, CarForm, formData, handleChange, handleSubmit, editingId }) {
    return (
        <div>
            <h2>Pridėti Automobilį</h2>

            {error && <p className="error-message">{error}</p>}

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