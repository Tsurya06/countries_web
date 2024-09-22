import '../../App.css';
import { NavLink } from 'react-router-dom';
import svg from '../../assets/3d-Earth-Globe.svg';
export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">      
      <NavLink to="/">
        <div><img src={svg} alt="The Globe Icon" style={{ width: '40px', height: 'auto' }} /></div>
      </NavLink>
      </div>
      <div className="header-links">
      <nav className="nav">
        <NavLink to="/" className="nav-btn"  >
          Home
        </NavLink>
        <NavLink to="/about" className="nav-btn" >
          About
        </NavLink>
        <NavLink to="/country" className="nav-btn" >
          Country
        </NavLink>
        <NavLink to="/contact" className="nav-btn" >
          Contact
        </NavLink>
      </nav>
      </div>
    </header>
  );
};
