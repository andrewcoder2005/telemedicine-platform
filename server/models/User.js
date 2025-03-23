const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], required: true },
    profile: {
      age: Number,
      gender: String,
      phone: String,
      medicalHistory: [String],
      specialization: String,
      licenseNumber: String,
      availability: [String],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
