import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">Kerry Kiambi Portfolio</NavLink>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
