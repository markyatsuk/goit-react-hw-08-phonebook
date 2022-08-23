import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import ContactsMenu from "../ContactsMenu/ContactsMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../../redux/auth/authSelectors";
import Logo from "../Logo/Logo";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  return (
    <header className={s.header}>
      <nav>
        <Logo />
        {isLoggedIn && <ContactsMenu />}

        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </nav>
    </header>
  );
}
