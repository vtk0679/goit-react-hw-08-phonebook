import Navigation from "components/Navigation";

import s from "./AppBar.module.css";
import * as authSelectors from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";

export default function Appbar() {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={s.header}>
        <Navigation />

        {isLoggenIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}
