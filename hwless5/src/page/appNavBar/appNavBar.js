import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">Some APIs</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/pokemons">Pokemons</Nav.Link>
                <Nav.Link as={NavLink} to='/anime'>Cat Facts</Nav.Link>
                <Nav.Link as={NavLink} to='/quotes'>Quotes</Nav.Link>
                <Nav.Link as={NavLink} to='/chars'>Harry Potter Chars</Nav.Link>
                <Nav.Link as={NavLink} to='/post'>Posts</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default AppNavBar;