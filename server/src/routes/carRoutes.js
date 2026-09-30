const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Nepavyko gauti automobiliu" });
  }
});

router.post("/", async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: "Nepavyko sukurti automobilio" });
  }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);

        if (!car) {
            return res.status(404).json({ message: "Automobilis nerastas" });
        }

        res.json(car);
    } catch (error) {
        res.status(500).json({ message: "Nepavyko gauti automobilio" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!car) {
            return res.status(404).json({ message: "Automobilis nerastas"});
        }

        res.json(car);
    } catch (error) {
        res.status(400).json({ message: "Nepavyko atnaujinti automobilio" });
    }
});

router.delete("/id", async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);

        if (!car) {
            return res.status(404).json({ message : "Automobilis nerastas"});
        }

        res.json({ message: "Automobilis ištrintas"});
    } catch (error) {
        res.status(500).json({ message: "Nepavyko ištrinti automobilio" });
    }
});


module.exports = router;