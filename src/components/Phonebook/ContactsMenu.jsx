import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function ContactsMenu() {
  return (
    <NavLink to="/contacts" className={s.nav__links + " " + s.contacts}>
      Contacts
    </NavLink>
  );
}
