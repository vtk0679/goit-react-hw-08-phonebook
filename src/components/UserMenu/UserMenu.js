import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { authSelectors, logOut } from "redux/auth";
import defaultAvatar from "components/UserMenu/default-avatar.png";
import s from "components/UserMenu/UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <Avatar alt="default avatar" src={avatar} />
      <span className={s.name}>Добро пожаловать, {name}</span>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        logout
      </Button>
    </div>
  );
}
