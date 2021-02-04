import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" id="main-nav">
      <div className="d-flex align-items-center mx-4  logo-container">
        <i className="fab fa-dev mr-2"></i>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Career Advice</Link>
          <Link to="/favourites">Your Favourites</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
