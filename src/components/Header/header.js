import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { login } from "../utils";
import "./header.css";

function NavbarSite() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>LaptopShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navMax" navbarScroll>
            <Link to="/" className="a-left">
              Home
            </Link>
            <Link to="/Products" className="a-left">
              Product
            </Link>
            <Link to="/About" className="a-left">
              About
            </Link>
          </Nav>

          {login ? (
            <Link to="/loginroute/Profile" className="a-right">
              Profile
            </Link>
          ) : (
            <Link to="/Login" className="a-right">
              Log in
            </Link>
          )}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
