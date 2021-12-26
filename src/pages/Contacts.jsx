import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";

export default function Contacts() {
  return (
    <section>
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </section>
  );
}
