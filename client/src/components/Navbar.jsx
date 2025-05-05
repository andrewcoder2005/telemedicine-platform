import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TeleHealth</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
