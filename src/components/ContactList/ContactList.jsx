import s from "./ContactList.module.scss";
import { Avatar, Button, Divider, List } from "antd";
import { TiDelete, TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../store/operations/contactOperations";
import { apiTokenConfig } from "../../api";
import { Modal } from "antd";
import { ContactForm } from "../ContactForm/ContactForm";

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);
  const token = useSelector((state) => state.user.token);

  const [filteredContacts, setFilteredContacts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    apiTokenConfig.set(token);
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    setFilteredContacts(getFilteredContacts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, contacts]);

  function getFilteredContacts() {
    if (contacts?.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }

  function handleDeleteContact(id) {
    dispatch(deleteContact(id));
  }

  const handleToggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handleAddContact = (contact) => {
    dispatch(
      addContact({
        name: "Jacob Mercer",
        number: "761-23-96",
      })
    );
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={filteredContacts}
        renderItem={(item) => (
          <List.Item className={s.listItem}>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.number}
            />
            <button
              className={`${s.editBtn} ${s.btn}`}
              onClick={() => handleDeleteContact(item.id)}
            >
              <TiEdit className={s.icon} />
            </button>
            <button
              className={`${s.delBtn} ${s.btn}`}
              onClick={() => handleDeleteContact(item.id)}
            >
              <TiDelete className={s.icon} />
            </button>
          </List.Item>
        )}
      />
      <Divider orientation="right">
        <Button size={"small"} onClick={handleToggleModal}>
          Add new contact
        </Button>
      </Divider>
      <Modal
        onCancel={handleToggleModal}
        visible={modalIsOpen}
        footer={[
          <Button
            key="submit"
            type="primary"
            // loading={loading}
            onClick={handleAddContact}
          >
            Add contact
          </Button>,
        ]}
      >
        <ContactForm />
      </Modal>
    </>
  );
}
