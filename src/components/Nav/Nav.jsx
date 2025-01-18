import CalendarIcon from "../../assets/icons/CalendarIcon";
import AddIcon from "../../assets/icons/AddIcon";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import LogOutIcon from "../../assets/icons/LogOutIcon";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.scss";

function Nav({ openModal }) {
  const location = useLocation();
  const hideNav = ["/", "/login", "/signup"];
  const shouldHideNav = hideNav.includes(location.pathname);

  return (
    <>
      {!shouldHideNav && (
        <section className="nav">
          <div className="nav__container">
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              <CalendarIcon className="nav__icon" />
            </NavLink>
            <NavLink
              to={"/add-habit"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              <AddIcon className="nav__icon" />
            </NavLink>
            <NavLink
              to={"/friends"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              <FriendsIcon className="nav__icon" />
            </NavLink>
            <div className="nav__logout" onClick={openModal}>
              <LogOutIcon />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Nav;
