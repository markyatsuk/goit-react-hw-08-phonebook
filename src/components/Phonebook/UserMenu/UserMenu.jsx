import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";
import authOperations from "../../../redux/auth/authOperations";
import s from "./UserMenu.module.css";
export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  return (
    <div className={s.container}>
      <span className={s.welcome}>Welcome, {email}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
