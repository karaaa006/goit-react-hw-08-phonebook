import s from "./ContactList.module.scss";
import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

export function ContactList({ contacts, handleDel }) {
  return (
    <div className="contacts">
      <ul className={s.contactList}>
        {contacts &&
          contacts.map((contact) => (
            <li key={contact.id} className={s.contactItem}>
              <p className={s.contactText}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={s.delBtn}
                onClick={() => {
                  handleDel(contact.id);
                }}
              >
                <TiDelete className={s.icon} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDel: PropTypes.func,
};
