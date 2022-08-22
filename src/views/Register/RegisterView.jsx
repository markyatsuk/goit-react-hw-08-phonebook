import { useState } from "react";
import s from "./RegisterView.module.css";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange({ target: { name, value } }) {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    e.target.reset();
  }
  return (
    <div className={s.authContiner}>
      <form className={s.searchForm} id="search-form" onSubmit={handleSubmit}>
        <input
          className={s.form__input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="ex: Benedict Cumberbatch"
          onChange={handleChange}
        />
        <input
          className={s.form__input}
          type="email"
          name="email"
          autoComplete="off"
          placeholder="ex: benedictcumberbatch@gmail.com"
          onChange={handleChange}
        />
        <input
          className={s.form__input}
          type="password"
          name="password"
          autoComplete="off"
          placeholder="examplepassword"
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Register
        </button>
      </form>
    </div>
  );
}
