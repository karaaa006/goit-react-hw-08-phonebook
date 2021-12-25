import { useState } from "react";
import PropTypes from "prop-types";

import s from "./ContactForm.module.scss";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/operations/contactOperations";
import { Button, Form, Input } from "antd";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const clearForm = () => {
    setNumber("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact({ name, number }));

    clearForm();
  };

  // return (
  // <form onSubmit={handleSubmit} className={s.form}>
  //   <label className={s.label}>
  //     <p className="labelText">Name</p>
  //     <input
  //       type="text"
  //       name="name"
  //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  //       required
  //       value={name}
  //       onChange={handleNameChange}
  //     />
  //   </label>
  //   <label className={s.label}>
  //     <p className="labelText">Number</p>
  //     <input
  //       type="tel"
  //       name="number"
  //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  //       required
  //       value={number}
  //       onChange={handleNumberChange}
  //     />
  //   </label>

  //   <button type="submit" className={s.btn}>
  //     Add contact
  //   </button>
  // </form>
  // );
  return (
    <Form
      name="login"
      layout="vertical"
      autoComplete="off"
      className="form"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input name!" }]}
        onChange={handleNameChange}
        value={name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: "Please input phone number!" }]}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        onChange={handleNumberChange}
        value={number}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item> */}
      {/* <Button type="primary" htmlType="submit" className="form-btn">
          Login
        </Button> */}
      {/* </Form.Item> */}
    </Form>
  );
}
export { ContactForm };

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
