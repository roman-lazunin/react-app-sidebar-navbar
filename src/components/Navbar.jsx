import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/Navbar.css'; 
import '../styles/components/Hamburger.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Stäng meny vid klick på länk eller overlay
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <div className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/about">Om oss</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>

      {/* Mobil sidomeny + overlay */}
      {isOpen && (
        <>
          <div className="mobilemenu__overlay" onClick={handleClose}></div>
          <div className="mobilemenu__panel">
            <div className="mobilemenu__close" onClick={handleClose}><FaTimes size={28} /></div>
            <ul className="mobilemenu__list">
              <li><Link to="/" onClick={handleClose}>Hem</Link></li>
              <li><Link to="/about" onClick={handleClose}>Om oss</Link></li>
              <li><Link to="/contact" onClick={handleClose}>Kontakt</Link></li>
            </ul>
            <hr style={{margin: '1.5rem 0'}} />
            <h4 className="mobilemenu__subtitle">Uppgifter</h4>
            <ul className="mobilemenu__list">
              <li><Link to="/uppgift2" onClick={handleClose}>Uppgift 2</Link></li>
              <li><Link to="/uppgift3" onClick={handleClose}>Uppgift 3</Link></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;