const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Database Error:", err));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Assignment Portal Backend Running"
  });
});

app.use("/api/auth", authRoutes);

// Invalid Route
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route Not Found"
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});