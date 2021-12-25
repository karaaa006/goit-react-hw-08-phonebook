import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSignUp } from "../store/operations/userOperations";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeUsername = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleChangeConfirmPassword = (e) => {
    const { value } = e.target;

    setConfirmPassword(value);
  };

  const handleSubmit = () => {
    password === confirmPassword
      ? dispatch(fetchSignUp({ name: username, password, email }))
      : console.log("error");
  };

  return (
    <Form
      name="register"
      layout="vertical"
      autoComplete="off"
      className="form"
      onFinish={handleSubmit}
      validateTrigger="onBlur"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        onChange={handleChangeUsername}
        value={username}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          { required: true, message: "Please input your e-mail!" },
        ]}
        onChange={handleChangeEmail}
        value={email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            min: 7,
            message: "Password must be at least 7 characters!",
          },
          { required: true, message: "Please input your password!" },
        ]}
        onChange={handleChangePassword}
        value={password}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm password"
        name="confirm-password"
        rules={[
          { required: true, message: "Please input your password again!" },
        ]}
        onChange={handleChangeConfirmPassword}
        value={confirmPassword}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-btn">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
