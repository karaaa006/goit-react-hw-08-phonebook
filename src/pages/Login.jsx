import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLogin } from "../store/operations/userOperations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleSubmit = () => {
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <Form
      name="login"
      layout="vertical"
      autoComplete="off"
      className="form"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: "Please input your e-mail!" }]}
        onChange={handleChangeEmail}
        value={email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        onChange={handleChangePassword}
        value={password}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="form-btn">
          Login
        </Button>
        Or <Link to="register">register now!</Link>
      </Form.Item>
    </Form>
  );
}
