import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { FaHome, FaQuestionCircle, FaUsers, FaRoad, FaBell, FaEnvelope, 
         FaGraduationCap, FaUniversity, FaBriefcase, FaUser } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/home">
          <img src="/logo.png" alt="Logo" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Form className="d-flex mx-auto">
          <FormControl type="search" placeholder="Search" className="mr-2" />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home"><FaHome /> Home</Nav.Link>
            <Nav.Link href="/help"><FaQuestionCircle /> Help Desk</Nav.Link>
            <Nav.Link href="/friends"><FaUsers /> My Friends</Nav.Link>
            <Nav.Link href="/career-path"><FaRoad /> Career Path</Nav.Link>
            <Nav.Link href="/notifications"><FaBell /> Notifications</Nav.Link>
            <Nav.Link href="/messages"><FaEnvelope /> Messages</Nav.Link>
            <Nav.Link href="/bursary"><FaGraduationCap /> Bursary</Nav.Link>
            <Nav.Link href="/institutions"><FaUniversity /> Institutions</Nav.Link>
            <Nav.Link href="/career-room"><FaBriefcase /> Career Room</Nav.Link>
            <Nav.Link href="/profile"><FaUser /> Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
