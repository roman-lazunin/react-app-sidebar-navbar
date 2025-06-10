import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Uppgifter</h3>
    <ul className="sidebar__list">
      <li><Link to="/uppgift2">Uppgift 2</Link></li>
      <li><Link to="/uppgift3">Uppgift 3</Link></li>
    </ul>
  </aside>
);

export default Sidebar;