import React from 'react';
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import './header.css'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { MenuItems } from '../data/MenuItems';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">
                <h2>Bienvenido al examen de react</h2>
                <img
              className="logo-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {MenuItems.map((item) => {
                    return (
                      <Nav.Link key={uuid()} as={Link} to={item.path}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default Menu;
