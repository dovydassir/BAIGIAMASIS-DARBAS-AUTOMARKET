const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
    {
        car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Įveskite tinkamą el. pašto adresą",
            ],

        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "new",
        },

    },

    {
        timestamps: true,
    }    
);

module.exports = mongoose.model("Inquiry", inquirySchema);
