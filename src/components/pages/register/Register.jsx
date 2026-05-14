import { Link } from "react-router-dom";
import "../register/register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username:</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email:</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password:</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerLoginButton">Register</button>
        <button className="registerButton">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}
