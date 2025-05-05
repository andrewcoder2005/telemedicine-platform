const express = require("express");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
const corsMiddleware = require("./middleware/cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2106;
// Connect to DB
connectDB();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use("/", require("./routes/authRoutes"));
// app.use("/appointments", require("./routes/appointmentRoutes"));
// app.use("/prescriptions", require("./routes/prescriptionRoutes"));
// app.use("/payments", require("./routes/paymentRoutes"));
app.get("/", (req, res) => {
  res.send("Telemedicine API is running...");
});
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
