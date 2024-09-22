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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
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