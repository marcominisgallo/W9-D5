import { Component } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
        <Container fluid>
          <img
            src={"../../public/netflix_logo.png"}
            alt="logo"
            className="ms-3"
            style={{ width: "8%" }}
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" active="true">
                Home
              </Nav.Link>
              <Nav.Link href="#">TV Show</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My list</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <i className="bi bi-search text-white"></i>
                <span className="d-lg-none text-white"> Search</span>
              </Nav.Link>
              <Nav.Link href="#">KIDS</Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-bell-fill text-white"></i>{" "}
                <span className="d-lg-none text-white">Notifications</span>
              </Nav.Link>
              <NavDropdown title="Profile menu" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#">
                  <img
                    src="./avatar.png"
                    alt="avatar-pic"
                    className="w-50"
                    drop="start"
                  />
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Change Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">LogOut</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default MyNavbar;
