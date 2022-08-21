import s from "./Phonebook.module.css";
import { useState } from "react";
import { useAddContactMutation } from "../../redux/reducer";
function Form({ contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [addContact] = useAddContactMutation();

  function handleNameChange(e) {
    setName(e.currentTarget.value);
  }
  function handleNumberChange(e) {
    setNumber(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isNameAlreadyExists = contacts.find((element) => element.name === name);
    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContact({ name, phone: number });
    e.target.reset();
  }

  return (
    <form action="" className={s.form} onSubmit={handleSubmit}>
      <fieldset>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
        />
        <br />
        <button type="submit" className={s.form__button}>
          Add contacts
        </button>
      </fieldset>
    </form>
  );
}

export { Form };
