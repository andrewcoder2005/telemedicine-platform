const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], required: true },
    profile: {
      dateOfBirth: { type: Date, required: true },
      gender: {
        type: String,
        enum: ["Male", "Female", "Non-binary"],
        required: true,
      },
      phone: { type: String },
      specialization: { type: String },
      licenseNumber: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
