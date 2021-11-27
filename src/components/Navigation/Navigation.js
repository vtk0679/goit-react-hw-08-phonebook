import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "redux/auth";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.container}>
      <NavLink
        exact
        to="/"
        className={s.navigation}
        activeClassName={s.navigationActive}
      >
        Home Page
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phoneBook"
          className={s.navigation}
          activeClassName={s.navigationActive}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
