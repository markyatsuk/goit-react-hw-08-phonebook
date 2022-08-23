import { NavLink } from "react-router-dom";
import s from "./AuthMenu.module.css";

export default function AuthMenu() {
  return (
    <ul className={s.nav__list}>
      <li className={s.list__item}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? s.activeNavLink : s.nav__links
          }
        >
          Register
        </NavLink>
      </li>
      <li className={s.list__item}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? s.activeNavLink : s.nav__links
          }
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}
