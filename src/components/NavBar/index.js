import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

function NavBar(props) {

    return (
        <div className="divNav">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">Google Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Search</Nav.Link>
                        <Nav.Link href="#pricing">Saved</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div>
    )
}

export default NavBar