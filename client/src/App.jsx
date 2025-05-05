import "./App.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Dashboard from "../src/pages/Dashboard";
import Appointment from "./pages/Appointment";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
axios.defaults.baseURL = "http://localhost:2106";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Navbar />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
