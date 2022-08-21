import { useState } from "react";
import { Contacts } from "./Contacts";
import { Section } from "./Section";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { useGetContactsQuery } from "../../redux/reducer";

export default function Phonebook() {
  const [filter, setFilter] = useState("");
  const { data: contacts } = useGetContactsQuery("");

  console.log("contacts", contacts);
  return (
    <div>
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
