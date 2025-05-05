const mongoose = require("mongoose");
const prescriptionSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appoinntmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },
    medication: {
      name: String,
      dosage: String,
      frequency: String,
    },
    instrunction: { type: String, required: true },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("Prescription", prescriptionSchema);
