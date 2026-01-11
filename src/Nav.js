import "./styles/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-menu">
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/tododashboard">Todo Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/todocalendar">Calendar View</NavLink>
        </li>
        <li>
          <NavLink to="/addtodo">Add Todo</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
