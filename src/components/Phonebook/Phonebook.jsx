import s from "./Phonebook.module.scss";
import { useState, useEffect } from "react";
import shortid from "shortid";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

export function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsLS = JSON.parse(localStorage.getItem("contacts"));

    if (contactsLS) {
      setContacts(contactsLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    if (isInclude(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts((prev) => [
      ...prev,
      {
        id: shortid.generate(),
        name,
        number,
      },
    ]);
  };

  const contactFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    if (contacts.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const isInclude = (name) => {
    if (contacts.length > 0) {
      return contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
    }
  };

  const deleteContact = (contactId) => {
    const delIdx = contacts.findIndex((contact) => {
      return contact.id === contactId;
    });

    setContacts((prev) => {
      const prevCopy = [...prev];
      prevCopy.splice(delIdx, 1);

      return prevCopy;
    });
  };

  return (
    <section className={s.phonebook}>
      <h1>Phonebook</h1>
      <div className={s.featuresWrap}>
        <div className={s.addContact}>
          <h2>Add new contact</h2>
          <ContactForm onSubmit={handleSubmit} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={contactFilter} />
          <ContactList
            contacts={getFilteredContacts()}
            handleDel={deleteContact}
          />
        </div>
      </div>
    </section>
  );
}
