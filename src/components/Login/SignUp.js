import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import userData from "../Data/userData";

export default function SignUp() {
  let navigate = useNavigate();

  let User = {};

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  const updateUser = (event) => {
    setUser(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePhone = (event) => {
    setPhone(event.target.value);
  };
  const updatePass = (event) => {
    setPass(event.target.value);
  };
  const isShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const submitHandel = () => {
    if (user && Phone && Pass.length >= 8) {
      User.id = userData.length + 1;
      User.name = user;
      User.email = email;
      User.number = Phone;
      User.pass = Pass;
      userData.push(User);

      

      navigate("/Login/signIn");
    } else {
      isShow();
    }
  };

  return (
    <>
      {show && (
        <Alert variant="danger">
          <p>user and phone input empty</p>
          <p>pass It is less than 8 characters</p>
        </Alert>
      )}
      <br />
      <Form.Control onKeyUp={updateUser} type="text" placeholder="*UserName" />
      <br />
      <Form.Control onKeyUp={updateEmail} type="text" placeholder="Email" />
      <br />
      <Form.Control onKeyUp={updatePhone} type="text" placeholder="*Phone" />
      <br />
      <Form.Control onKeyUp={updatePass} type="text" placeholder="*Password" />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={submitHandel}> Submit</Button>
      </div>
    </>
  );
}
