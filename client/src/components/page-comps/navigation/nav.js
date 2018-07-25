import React, { Component } from 'react';

export class Navbar extends Component {
    render () {
        return (
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Civic Engagement Project</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>
          </Navbar>
        )
    }
}