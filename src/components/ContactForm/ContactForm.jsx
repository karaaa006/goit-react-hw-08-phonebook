import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  fetchEditContact,
} from "../../store/operations/contactOperations";
import { Button, Form, Input } from "antd";
import { isInclude } from "../../utils";

function ContactForm({ editingContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue(editingContact);
    setName(editingContact.name);
    setNumber(editingContact.number);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingContact]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (isInclude(name, contacts) && !editingContact.id) {
      alert(`${name} is already in contacts.`);
    } else {
      if (editingContact.id) {
        dispatch(fetchEditContact({ id: editingContact.id, name, number }));
      } else {
        dispatch(addContact({ name, number }));
      }
      form.resetFields();
    }
  };

  return (
    <Form
      form={form}
      name="addContact"
      layout="vertical"
      autoComplete="off"
      className="form"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input name!" }]}
      >
        <Input value={name} onChange={handleNameChange} />
      </Form.Item>
      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: "Please input phone number!" }]}
      >
        <Input onChange={handleNumberChange} value={number} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-btn">
          {editingContact.id ? "Edit contact" : "Add contact"}
        </Button>
      </Form.Item>
    </Form>
  );
}
export { ContactForm };

ContactForm.propTypes = {
  editingContact: PropTypes.object,
};
