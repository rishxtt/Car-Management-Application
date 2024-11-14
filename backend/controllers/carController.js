const Car = require("../models/Car");

exports.createCar = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const images = req.files.map((file) => file.path);
    const car = new Car({ userId: req.userId, title, description, tags, images });
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: "Error creating car" });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({ userId: req.userId });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Error fetching cars" });
  }
};

exports.getCar = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id, userId: req.userId });
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Error fetching car details" });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Error updating car" });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting car" });
  }
};
