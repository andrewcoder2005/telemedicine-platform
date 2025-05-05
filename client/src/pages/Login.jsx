import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./styles/Layout.css";
import "./styles/AuthForm.css";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successfully. Welcome!");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="main-content">
        <div className="form-section">
          <h2>Login to TeleHealth</h2>
          <form onSubmit={handleLogin} className="auth-form">
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
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />

            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 TeleHealth Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Login;
