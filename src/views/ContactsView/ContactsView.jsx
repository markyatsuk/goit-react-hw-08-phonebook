import { useState } from "react";
import { useGetContactsQuery } from "../../redux/reducer";

import { Section } from "../../components/Phonebook/Section";
import { Form } from "../../components/Phonebook/Form";
import { Filter } from "../../components/Phonebook/Filter";
import { Contacts } from "../../components/Phonebook/Contacts";

export default function ContactsView() {
  const [filter, setFilter] = useState("");
  const { data: contacts } = useGetContactsQuery("");
  return (
    <>
      <Section title="Phonebook">
        <Form contacts={contacts} />
      </Section>

      <Section title="Contacts">
        <Filter setFilter={setFilter} />
        {contacts && <Contacts contacts={contacts} filter={filter} />}
      </Section>
    </>
  );
}
