function InquiriesPage({ cars, 
    inquiryForm, 
    handleInquiryChange, 
    handleInquirySubmit, 
    inquiryMessage, 
    inquiries, 
    handleInquiryDelete,
    handleInquiryEdit,
    inquiryEditingId }) {
    return (
        <div>
            <h2>Užklausų sąrašas</h2>
            <p>Čia galima palikti užklausą dėl pasirinkto automobilio</p>

            {inquiryMessage && <p className="success-message">{inquiryMessage}</p>}

            <form className="inquiry-form" onSubmit={handleInquirySubmit}>
                <select
                name="car"
                value={inquiryForm.car}
                onChange={handleInquiryChange}
                >
                <option value="">Pasirinkite automobili</option>
                {cars.map((car) => (
                    <option key={car._id} value={car._id}>
                    {car.brand} {car.model}
                    </option>
                ))}
                </select>
                <input
                type="text"
                name="name"
                required
                placeholder="Vardas"
                value={inquiryForm.name}
                onChange={handleInquiryChange}
                />
                <input
                type="email"
                name="email"
                required
                placeholder="El.pastas"
                value={inquiryForm.email}
                onChange={handleInquiryChange}
                />
                <input
                type="tel"
                name="phone"
                required
                placeholder="Telefono numeris"
                value={inquiryForm.phone}
                onChange={handleInquiryChange}
                />
                <textarea
                name="message"
                required
                placeholder="Žinutė"
                value={inquiryForm.message}
                onChange={handleInquiryChange}
                />
                <button type="submit">
                    {inquiryEditingId ? "išsaugoti pakeitimus" : "Sukurti užklausą"}</button>

            </form>
            <h3>Gautos užklausos</h3>
            <div className="inquiry-list">
            {inquiries.length === 0 && <p>Užklausų nėra.</p>}
            {inquiries.map((inquiry) => (
                <div className="inquiry-card" key={inquiry._id}>
                <p> <b>Automobilis: </b>{" "}
                {inquiry.car?.brand} {inquiry.car?.model}</p>

                <h4>Vardas: {inquiry.name}</h4>
                <p>Email: {inquiry.email}</p>
                <p>Telefonas: {inquiry.phone}</p>
                <p>Žinutė: {inquiry.message}</p>

                <button onClick={() => handleInquiryEdit(inquiry)}>Redaguoti</button>
                

                <button onClick={() => handleInquiryDelete(inquiry._id)}>Ištrinti</button>
                </div>
            ))}
            </div>
        </div>          
        

    );
}

export default InquiriesPage