import s from "./ContactList.module.scss";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteContact } from "../../store/operations/contactOperations";

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);
  const [filteredContacts, setFilteredContacts] = useState([]);

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
    dispatch(deleteContact(id));
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
