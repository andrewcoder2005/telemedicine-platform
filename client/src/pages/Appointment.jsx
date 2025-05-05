import React, { useState } from "react";
const Appointment = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API here
    console.log("Appointment submitted:", formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Doctor Selection */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Doctor
          </label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          >
            <option value="">-- Choose Doctor --</option>
            <option value="dr_john">Dr. John - Cardiologist</option>
            <option value="dr_emily">Dr. Emily - Dermatologist</option>
            <option value="dr_smith">Dr. Smith - General</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        {/* Reason for Visit */}
        <div>
          <label className="block text-sm font-medium mb-1">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows="3"
            placeholder="Describe your symptoms or reason for visit"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
