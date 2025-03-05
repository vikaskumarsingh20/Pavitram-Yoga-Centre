import React from "react";
import { Navbar, Nav, Dropdown, Image } from "react-bootstrap";
import "./Header.css";
import profilePic from "../../../assets/Instractor/guruji.jpg"; // Add a sample profile picture

const Header = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Navbar.Brand href="#" className="brand">
        <span className="brand-name">Pavitram</span> <span className="brand-highlight">Yoga</span>
      </Navbar.Brand>

      <Nav className="ms-auto d-flex align-items-center">
        {/* Notification Bell */}
        <Nav.Link href="#" className="notification-icon">
          🔔 <span className="badge">4</span>
        </Nav.Link>

        {/* Profile Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle className="profile-toggle">
            <Image src={profilePic} roundedCircle className="profile-pic" /> Delilah Dillon
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
