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
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(400).json({ message: "Nepavyko sukurti užklausų" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req. bod, {
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

module.exports = router;
       

