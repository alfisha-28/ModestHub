import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
import logo from "../assets/logo.png";   // Your provided ModestHub logo
import registerPic from "../assets/register.png"; // Girl illustration

export default function Register() {
  return (
    <div className="register-container">
      
      {/* Left Section */}
      <div className="form-section">
        {/* Logo */}
        <div className="logo-title">
          <img src={logo} alt="ModestHub Logo" className="logo" />
          <h1 className="title">MODESTHUB</h1>
        </div>

        {/* Title */}
        <h2 className="form-title">Register</h2>
        <p className="subtitle">Sign up. Join in. Stay Modest.</p>

        {/* Form */}
        <form className="register-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Set Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>

        {/* Footer */}
        <p className="footer-text">
          Already have an Account?{" "}
          <Link to="/login">Click here to Login</Link>
        </p>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <img src={registerPic} alt="Girl Illustration" />
      </div>
    </div>
  );
}
