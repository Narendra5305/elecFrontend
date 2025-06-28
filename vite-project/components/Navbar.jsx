import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">NPM Favs</h1>
      <div className="links">
        <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')}>
          Packages
        </NavLink>
        <NavLink to="/favs" className={({ isActive }) => (isActive ? 'active' : '')}>
          Favs
        </NavLink>
      </div>
    </nav>
  );
}
