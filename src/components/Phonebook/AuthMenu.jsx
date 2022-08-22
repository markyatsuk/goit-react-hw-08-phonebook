import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function AuthMenu() {
  return (
    <ul className={s.nav__list}>
      <li className={s.list__item}>
        <NavLink to="/register" className={s.nav__links}>
          Register
        </NavLink>
      </li>
      <li className={s.list__item}>
        <NavLink to="/login" className={s.nav__links}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}
