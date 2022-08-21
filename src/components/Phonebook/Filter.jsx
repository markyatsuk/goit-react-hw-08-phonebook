import s from "./Phonebook.module.css";

const Filter = ({ setFilter }) => {
  function changeFilter(e) {
    setFilter(e.target.value);
  }
  return (
    <label htmlFor="" className={s.filter__label}>
      Find contacts by name <input type="text" onChange={changeFilter} />
    </label>
  );
};

export { Filter };
