import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import userData from "../Data/userData";
import { login, isLogin, userInformation } from "../utils";

export default function SignIn() {
  let navigate = useNavigate();

  const [user, setUser] = useState();

  const [Pass, setPass] = useState();

  const [show, setShow] = useState(false);

  const updateUser = (event) => {
    setUser(event.target.value);
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
    userData.forEach((e) => {

      if (user && user == e.name && Pass == e.pass) {
        isLogin(true);
        userInformation.push(e);
        navigate("/");
      } else {
        isShow();
      }
    });
  };

  return (
    <>
      {show && (
        <Alert variant="danger">
          <p>user OR pass invalid</p>
        </Alert>
      )}
      <br />
      <Form.Control onKeyUp={updateUser} type="text" placeholder="UserName" />
      <br />
      <Form.Control onKeyUp={updatePass} type="text" placeholder="Password" />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={submitHandel}> Submit</Button>
      </div>
    </>
  );
}
