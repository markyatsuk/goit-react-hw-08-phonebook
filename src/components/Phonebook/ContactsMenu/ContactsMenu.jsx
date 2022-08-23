import { NavLink } from "react-router-dom";
import s from "./ContactsMenu.module.css";

export default function ContactsMenu() {
  return (
    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? s.activeNavLink : s.nav__links)}
    >
      Contacts
    </NavLink>
  );
}
