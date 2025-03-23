const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 2106;
const app = express();
// Connect to DB
connectDB();

const User = require("./models/User");
const Appointment = require("./models/Appointment");
const Payment = require("./models/Payment");
const Prescription = require("./models/Prescription");

app.get("/", (req, res) => {
  res.send("Telemedicine API is running...");
});
app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
