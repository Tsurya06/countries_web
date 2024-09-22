import "../../App.css";
import { FaArrowRight } from "react-icons/fa";
import svg from "../../assets/3d-Earth-Globe.svg";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="hero-content-container">
        <div className="hero-content">
          <h1 className="hero-content-heading">Welcome to The Globe</h1>
          <p className="hero-content-para">
            Discover amazing content and explore new horizons with us.
          </p>
          <NavLink to='/'>
            <button style={{cursor:'pointer'}}> Get Started <FaArrowRight /> </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src={svg}
            alt="The Globe Image"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      </div>
    </main>
  );
};
