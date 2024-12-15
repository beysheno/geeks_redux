import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">Funny App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/cats">Random Cats</Nav.Link>
                <Nav.Link as={NavLink} to='/jokes'>Jokes</Nav.Link>
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default AppNavBar;