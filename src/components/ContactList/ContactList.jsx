import s from "./ContactList.module.scss";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { delContact } from "../../store/reducers/contacts";
import { useEffect, useState } from "react";

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const [filteredContacts, setFilteredContacts] = useState(
    getFilteredContacts()
  );

  useEffect(() => {
    setFilteredContacts(getFilteredContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, contacts]);

  function getFilteredContacts() {
    if (contacts.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }

  function handleDeleteContact(id) {
    dispatch(delContact(id));
  }

  return (
    <div className="contacts">
      <ul className={s.contactList}>
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <li key={contact.id} className={s.contactItem}>
              <p className={s.contactText}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={s.delBtn}
                onClick={() => handleDeleteContact(contact.id)}
              >
                <TiDelete className={s.icon} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
