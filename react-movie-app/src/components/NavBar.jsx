import { NavLink } from "react-router";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
