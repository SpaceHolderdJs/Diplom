import React from "react";

import { FloatingLabel, Form, Button } from "react-bootstrap";
import variables from "../../../colors.module.scss";

const Login = () => {
  return (
    <div className="column centered">
      <h1>Login</h1>
      <Form
        className="column form shadow-lg"
        style={{ background: variables.green }}>
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Email address"
          className="mb-3 shadow-lg">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            style={{ background: variables.greyLight }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputGrid"
          label="Password"
          className="mb-3 shadow-lg">
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ background: variables.greyLight }}
          />
        </FloatingLabel>
        <Button style={{ background: variables.navy }}>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
