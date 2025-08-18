// import { Link } from "react-router-dom";
// import "../styles/Header.css";

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <span className="logo-text">NEXA</span>
//           <span className="logo-highlight">EXHIBITS</span>
//         </div>
//         <nav className="nav">
//           <Link to="/" className="nav-link">
//             <span className="nav-text">Home</span>
//             <div className="nav-underline"></div>
//           </Link>
//           <Link to="/about" className="nav-link">
//             <span className="nav-text">About</span>
//             <div className="nav-underline"></div>
//           </Link>
//           <Link to="/services" className="nav-link">
//             <span className="nav-text">Services</span>
//             <div className="nav-underline"></div>
//           </Link>
//           <Link to="/portfolio" className="nav-link">
//             <span className="nav-text">Portfolio</span>
//             <div className="nav-underline"></div>
//           </Link>
//           <Link to="/contact" className="nav-link">
//             <span className="nav-text">Contact</span>
//             <div className="nav-underline"></div>
//           </Link>
//         </nav>
//         <div className="mobile-menu-toggle">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <div className="header-glow"></div>
//     </header>
//   );
// }

// export default Header;


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
        {/* Logo */}
        <div className="logo">
          <span className="logo-text">NEXA</span>
          <span className="logo-highlight">EXHIBITS</span>
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
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span className="nav-text">About</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/services"
            className={`nav-link ${
              location.pathname === "/services" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span className="nav-text">Services</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span className="nav-text">Portfolio</span>
            <div className="nav-underline"></div>
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
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
