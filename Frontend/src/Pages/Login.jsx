import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import logo from "../assets/logo.png"; // ModestHub logo
import loginPic from "../assets/login.png"; // Girl illustration for login

export default function Login() {
  return (
    <div className="login-container">
      
      {/* Left Section - Full Background Image */}
      <div className="image-section">
        <img src={loginPic} alt="Girl Illustration" />
      </div>

      {/* Right Section - Form */}
      <div className="form-section">
        {/* Logo */}
        <div className="logo-title">
          <img src={logo} alt="ModestHub Logo" className="logo" />
          <h1 className="title">MODESTHUB</h1>
        </div>

        {/* Title */}
        <h2 className="form-title">Login</h2>
        <p className="subtitle">Log in. Connect. Keep It Modest.</p>

        {/* Form */}
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p className="forgot-text">Forget Password ?</p>
          <button type="submit">Login</button>
        </form>

        {/* Footer */}
        <p className="footer-text">
          New to Modest ?<Link to="/">Click here to Register</Link>
        </p>
      </div>
    </div>
  );
}
