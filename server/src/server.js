const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/inquiries", inquiryRoutes);

app.get("/api/health", (req, res) => {
    res.json({message: "Serveris veikia"});
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Serveris paleistas ant porto ${PORT}`);

});