import { NavLink } from 'react-router-dom';
import '../../App.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-desc">
            We are dedicated to providing the best content and resources for our users.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-desc">Email: info@theglobe.com</p>
          <p className="footer-desc">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Globe. All rights reserved.</p>
      </div>
    </footer>
  );
};