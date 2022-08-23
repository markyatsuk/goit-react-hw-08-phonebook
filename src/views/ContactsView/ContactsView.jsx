import { useState } from "react";
import { useGetContactsQuery } from "../../redux/reducer";
import s from "./ContactsView.module.css";
import { Section } from "../../components/Phonebook/Section/Section";
import { Form } from "../../components/Phonebook/Form/Form";
import { Filter } from "../../components/Phonebook/Filter/Filter";
import { Contacts } from "../../components/Phonebook/Contacts/Contacts";

export default function ContactsView() {
  const [filter, setFilter] = useState("");
  const { data: contacts } = useGetContactsQuery("");
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <Form contacts={contacts} />
      </Section>

      <Section title="Contacts">
        <Filter setFilter={setFilter} />
        {contacts && <Contacts contacts={contacts} filter={filter} />}
      </Section>
    </div>
  );
}
