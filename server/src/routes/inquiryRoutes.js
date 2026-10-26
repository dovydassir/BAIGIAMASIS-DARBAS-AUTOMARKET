const express = require("express");
const Inquiry = require("../models/Inquiry");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const inquiries = await Inquiry.find().populate("car");
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: "Nepavyko gauti užklausų" });
    }
});

router.post("/", async (req, res) => {
    try {
        const inquiry = await Inquiry.create(req.body);
        const savedInquiry = await Inquiry.findById(inquiry._id).populate("car");
        res.status(201).json(savedInquiry);
    } catch (error) {
        res.status(400).json({ message: "Nepavyko sukurti užklausų" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!inquiry) {
            return res.status(404).json({ message: "Užklausa nerasta" });
        }

        res.json(inquiry);
    } catch (error) {
        res.status(400).json({ message: "Nepavyko atnaujinti užklausos" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
        if (!inquiry) {
            return res.status(404).json({ message: "Užklausa nerasta" });
        }
        res.json({ message: "Užklausa ištrinta" });
        } catch (error) {
        res.status(500).json({ message: "Nepavyko ištrinti užklausos" });
    }
});

module.exports = router;
       

