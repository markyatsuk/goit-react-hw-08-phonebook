import s from "./Filter.module.css";

const Filter = ({ setFilter }) => {
  function changeFilter(e) {
    setFilter(e.target.value);
  }
  return (
    <label htmlFor="" className={s.filter__label}>
      Find contacts by name{" "}
      <input type="text" onChange={changeFilter} className={s.form__input} />
    </label>
  );
};

export { Filter };
