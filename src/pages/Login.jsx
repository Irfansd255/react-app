import React from "react";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
// import Button from "../components/Button";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
  const checkNumber = (num) => {
    if (num > 0) {
      return "posative Number";
    } else if (num < 0) {
      return "Nigative Number";
    } else {
      return "Number is Zero";
    }
  };

  let number = checkNumber(45);

  const currDate = new Date().toDateString();
  console.log(currDate);

  return (
    <div className="main-login-wrapper">
      {/* <div className="login-form">
        <h1>Login</h1>
       
        <label
          htmlFor=""
          style={{ color: "Red", fontSize: "16px", fontWeight: "600" }}
        >
          User Name
        </label>
        <InputText />
        <label htmlFor="">Password</label>
        <InputPassword />
        <Button />
      </div> */}

      <h1>{number}</h1>
      <h1>Date: {currDate}</h1>

      <button className="btn btn-primary">Submit</button>

      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Button variant="success">Success</Button>
    </div>
  );
};

export default Login;
