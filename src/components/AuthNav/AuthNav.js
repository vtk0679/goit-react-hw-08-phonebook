import React from "react";
import { NavLink } from "react-router-dom";

import s from "components/AuthNav/AuthNav.module.css";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.navigationActive}
    >
      REGISTRATION
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.navigationActive}
    >
      LOGIN
    </NavLink>
  </div>
);

export default AuthNav;
