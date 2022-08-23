import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import ContactsMenu from "./ContactsMenu";
import AuthMenu from "./AuthMenu";
import UserMenu from "./UserMenu";
import authSelectors from "../../redux/auth/authSelectors";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLogged);
  return (
    <header className={s.header}>
      <nav>
        {isLoggedIn && <ContactsMenu />}
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </nav>
    </header>
  );
}
