import logo from "../../../images/phonebook.jpg";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={s.container}>
      <img src={logo} alt="logo" className={s.logo} />
      <h1 className={s.title}>Phonebook</h1>
    </div>
  );
}
