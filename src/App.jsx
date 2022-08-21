import Phonebook from "./components/Phonebook/Phonebook";
import s from "./components/Phonebook/Phonebook.module.css";

export const App = (store) => {
  return (
    <div className={s.container}>
      <Phonebook store={store} />
    </div>
  );
};
