import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.css';

// Återanvändbar komponent för uppgiftslänkar
export const TaskLinks = ({ onClick }) => (
  <>
    <li><Link to="/uppgift2" onClick={onClick}>Uppgift 2</Link></li>
    <li><Link to="/uppgift3" onClick={onClick}>Uppgift 3</Link></li>
  </>
);

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Uppgifter</h3>
    <ul className="sidebar__list">
      <TaskLinks />
    </ul>
  </aside>
);

export default Sidebar;