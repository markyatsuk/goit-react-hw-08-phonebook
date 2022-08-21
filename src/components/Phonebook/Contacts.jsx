import s from "./Phonebook.module.css";
import { useDeleteContactMutation } from "../../redux/reducer";

const Contacts = ({ contacts, filter }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  if (filteredContacts) {
    return (
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={s.contact}>
              {contact.name}: <span>{contact.phone}</span>
              <button
                type="button"
                className={s.delete_btn}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};

export { Contacts };
