import "./appHeader.scss";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> портал о вселенной
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/"
            >
              Персонажи
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/comics"
            >
              Комиксы
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
