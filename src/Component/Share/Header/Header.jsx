import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <Container>
            <Navbar bg="" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='fw-bold fs-4' href="#">
                        <img src={logo} className='W-25 me-2 rounded-circle' alt="" style={{ width: 45 }} />
                        Toy Doll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='fw-semibold me-3' href="/">Home</Nav.Link>
                            <Nav.Link className='fw-semibold me-3' href="/allToy">All Toys</Nav.Link>
                            <Nav.Link className='fw-semibold me-3' href="/myToy">My Toy</Nav.Link>
                            <Nav.Link className='fw-semibold me-3' href="/addToy">Add A Toy</Nav.Link>
                            <Nav.Link className='fw-semibold me-3' href="/blog">Blog</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FaUser style={{ fontSize: '2rem' }}></FaUser>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default Header;