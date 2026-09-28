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

module.exports = router;