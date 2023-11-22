import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  const handleExport = () => {
    window.location.href = 'https://codeschris.pythonanywhere.com/export-csv/';
  };
  return (
    <Navbar bg="white" expand="lg" className="mx-4">
      <Navbar.Brand href="/">
        <img
          src="/assets/logo.png"
          height="30"
          width="150"
          alt="Swahilipot Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/analytics">Analytics</Nav.Link>
          <Nav.Link href="/members">Members</Nav.Link>
          <Nav.Link href="/communications">Communications</Nav.Link>
          <Nav.Link href="#">
            <button 
              className="btn btn-success btn-sm"
              onClick={handleExport}
            >
              Export Data
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
