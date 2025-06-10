import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TaskLinks } from './Sidebar';
import '../styles/components/Navbar.css'; 
import '../styles/components/Hamburger.css';

// Återanvändbar komponent för navigationslinks
const NavLinks = ({ onClick }) => (
  <>
    <li><Link to="/" onClick={onClick}>Hem</Link></li>
    <li><Link to="/about" onClick={onClick}>Om oss</Link></li>
    <li><Link to="/contact" onClick={onClick}>Kontakt</Link></li>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Stänger menyn
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyApp</div>
      <div className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      
      {/* Desktop meny */}
      <ul className="navbar__list">
        <NavLinks />
      </ul>

      {/* Mobil meny */}
      {isOpen && (
        <>
          <div className="mobilemenu__overlay" onClick={handleClose}></div>
          <div className="mobilemenu__panel">
            <div className="mobilemenu__close" onClick={handleClose}><FaTimes size={28} /></div>
            <ul className="mobilemenu__list">
              <NavLinks onClick={handleClose} />
            </ul>
            <hr />
            <h4>Uppgifter</h4>
            <ul className="mobilemenu__list">
              <TaskLinks onClick={handleClose} />
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;