

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo with Text */}
        <div className="logo">
          <Link to="/" onClick={closeMenu} className="logo-link">
            {/* Replace logo.png with your actual logo file in /public or /assets */}
            <img src="/images/logo1.jpeg" alt="Nexa Exhibits Logo" className="logo-img" />
            <span className="logo-text">NEXA</span>
            <span className="logo-highlight">EXHIBITS</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "mobile-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">Home</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">About</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/services"
            className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">Services</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">Portfolio</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/Clients"
            className={`nav-link ${location.pathname === "/Clients" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">Clients</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-text">Contact</span>
            <div className="nav-underline"></div>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-menu-toggle" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-glow"></div>
    </header>
  );
}

export default Header;
