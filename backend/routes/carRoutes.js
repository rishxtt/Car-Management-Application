const express = require("express");
const {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

router.post("/", authenticate, upload.array("images", 10), createCar);
router.get("/", authenticate, getCars);
router.get("/:id", authenticate, getCar);
router.put("/:id", authenticate, updateCar);
router.delete("/:id", authenticate, deleteCar);

module.exports = router;