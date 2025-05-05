import React, { useState } from "react";
import "./styles/Layout.css";
import "./styles/AuthForm.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "Male",
    phone: "",
    dateOfBirth: "",
    specialization: "",
    licenseNumber: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    // destructure the form data
    const { name, email, password, role, gender, dateOfBirth, phone } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        role,
        gender,
        phone,
        dateOfBirth,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successfully. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <>
      <main className="main-content">
        <div className="form-container">
          <div className="form-section">
            <h2>Register to TeleHealth</h2>
            <form onSubmit={registerUser} className="auth-form">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />

              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={data.role}
                onChange={(e) => setData({ ...data, role: e.target.value })}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>

              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={data.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>

              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                id="dateOfBirth"
                type="date"
                value={data.dateOfBirth}
                onChange={(e) =>
                  setData({ ...data, dateOfBirth: e.target.value })
                }
                required
              />

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />

              {data.role === "doctor" && (
                <>
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    id="specialization"
                    type="text"
                    placeholder="e.g. Cardiology"
                    value={data.specialization}
                    onChange={(e) =>
                      setData({ ...data, specialization: e.target.value })
                    }
                  />

                  <label htmlFor="licenseNumber">License Number</label>
                  <input
                    id="licenseNumber"
                    type="text"
                    placeholder="Enter license number"
                    value={data.licenseNumber}
                    onChange={(e) =>
                      setData({ ...data, licenseNumber: e.target.value })
                    }
                  />
                </>
              )}

              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 TeleHealth Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Register;
