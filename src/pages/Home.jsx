import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardCom from "../components/CardCom";
import Person from "../components/Person";

const Home = () => {

const user ={
  uname:"irfan",
  age:"27",
  married:false
}

  return (
    <div className="container header-wrapper">
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className="row ">
        <div className="col-3 mt-4">
          <CardCom myname="irfan" age="25" inputType="text" btnColor="btn-danger"  />
        </div>
        <div className="col-3 mt-4">
          <CardCom myname="zubair" age="30" inputType="date" btnColor="btn-success" />
        </div>
        <div className="col-3 mt-4">
          <CardCom myname="sohel" age="40" btnName="Login" inputType="number" btnColor="btn-secondary" />
        </div>
        <div className="col-3 mt-4">
          <CardCom myname="zain" age="28" inputType="password" btnColor="btn-info"/>
        </div>
      </div>
      <hr />
      <Person person={user} />

    </div>
  );
};

export default Home;
