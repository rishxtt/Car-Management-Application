const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000", 
  "https://car-management-application-frontend.onrender.com", 
];

app.use(cors({
  origin: allowedOrigins, 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true, 
}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/cars", require("./routes/carRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
