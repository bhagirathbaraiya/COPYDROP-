import React, { useState } from "react";
import "../Styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="companyname">CopyDrop</h1>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Text Transfer</li>
          {/* <li>Live Code</li>
          <li>File Transfer</li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
