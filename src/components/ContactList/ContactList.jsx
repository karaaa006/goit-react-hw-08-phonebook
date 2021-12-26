import s from "./ContactList.module.scss";
import { Avatar, Button, Divider, List } from "antd";
import { TiDelete, TiEdit } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
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
  const [editingContact, setEditingContact] = useState({
    id: null,
    name: "",
    number: "",
  });

  useEffect(() => {
    apiTokenConfig.set(token);
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function handleEditContact(contactInfo) {
    setEditingContact(contactInfo);

    handleToggleModal();
  }

  function handleAddContact() {
    setEditingContact({ id: null, name: "", number: "" });

    handleToggleModal();
  }

  function handleToggleModal() {
    setModalIsOpen((prev) => !prev);
  }

  return (
    <>
      <Modal
        transitionName=""
        maskTransitionName=""
        onCancel={handleToggleModal}
        visible={modalIsOpen}
        footer={null}
      >
        <ContactForm editingContact={editingContact} />
      </Modal>
      <List
        itemLayout="horizontal"
        dataSource={filteredContacts}
        renderItem={(item) => (
          <List.Item className={s.listItem}>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.name}
              description={<a href={`tel: ${item.number}`}>{item.number}</a>}
            />
            <button
              className={`${s.editBtn} ${s.btn}`}
              onClick={() => handleEditContact(item)}
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
        <Button size={"small"} onClick={handleAddContact}>
          Add new contact
        </Button>
      </Divider>
    </>
  );
}
