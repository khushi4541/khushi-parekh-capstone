import CalendarIcon from "../../assets/icons/CalendarIcon";
import AddIcon from "../../assets/icons/AddIcon";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <section className="nav">
      <div className="nav__container">
        <NavLink to={"/:id"} className={({ isActive }) => `nav__icon ${isActive ? 'nav__icon--active' : ''}`}>
          <CalendarIcon className="nav__icon"/>
        </NavLink>
        <NavLink to={"/habits"} className={({ isActive }) => `nav__icon ${isActive ? 'nav__icon--active' : ''}`}>
          <AddIcon className="nav__icon"/>
        </NavLink>
        <NavLink to={"/friends/:id"} className={({ isActive }) => `nav__icon ${isActive ? 'nav__icon--active' : ''}`}>
          <FriendsIcon className="nav__icon"/>
        </NavLink>
        <SettingsIcon />
      </div>
    </section>
  );
}

export default Nav;
