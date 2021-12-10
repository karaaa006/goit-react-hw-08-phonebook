import s from "./Phonebook.module.scss";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

export function Phonebook() {
  return (
    <section className={s.phonebook}>
      <h1>Phonebook</h1>
      <div className={s.featuresWrap}>
        <div className={s.addContact}>
          <h2>Add new contact</h2>
          <ContactForm />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </section>
  );
}
