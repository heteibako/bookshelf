import React from 'react';
import { Link } from 'react-router-dom';

import { UncontrolledCollapse, Navbar, Nav, Container } from 'reactstrap';
export default function NavBar() {
  return (
    <Navbar className="bg-primary" expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link className="navbar-brand" to="/">
            My Reads
          </Link>
          <button className="navbar-toggler" id="example-navbar-primary" type="button">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <UncontrolledCollapse navbar toggler="#example-navbar-primary">
          <Nav className="ml-auto" navbar>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Books
              </Link>
            </li>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
}
