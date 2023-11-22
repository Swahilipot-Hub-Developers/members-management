import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';

const NavBar = () => {
  const handleExport = async () => {
    try {
      const response = await axios.get('https://codeschris.pythonanywhere.com/api/export-csv/', { responseType: 'blob' });

      const blob = new Blob([response.data], { type: 'text/csv' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'members_data.csv';
      link.click();

    } catch (error) {
      console.error('Error exporting data:', error);
    }
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
