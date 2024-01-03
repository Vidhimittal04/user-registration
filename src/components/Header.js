import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


const Header = ({ setIsShowCart, cart }) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark mx-2">
            User Registration
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark mx-2">
              Home
            </NavLink>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
