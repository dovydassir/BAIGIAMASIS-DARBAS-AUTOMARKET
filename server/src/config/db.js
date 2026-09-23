const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB  prisijungta");
    } catch (error) {
        console.error("MongoDB prisijungimo klaida", error);
    }

    };

    module.exports = connectDB;