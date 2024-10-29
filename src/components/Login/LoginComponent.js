import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./LoginComponent.css";

const LoginComponent = () => (
  <div
    style={{
      width: "100%",
      top: 0,
      zIndex: -1,
      bottom: 0,
      position: "absolute",
    }}
  >
    <Container>
      <Row>
        <Col className="felx-centered">
          <Card className="divBox">
            <Card.Body>
              <h2>
                <Link to={"signIn"} className="a">
                  signIn
                </Link>
                <span>/</span>
                <Link to={"signUp"} className="a">
                  signUp
                </Link>
              </h2>
              <Outlet />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LoginComponent;
