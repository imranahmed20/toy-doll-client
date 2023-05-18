import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.jpg'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))

    }
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

                            {
                                user ?
                                    <img style={{ width: '50px', height: '50px' }} title={user?.displayName} className='rounded-circle me-3' src={user?.photoURL} alt="" />
                                    :
                                    <FaUser className='me-3' style={{ fontSize: '2rem' }}></FaUser>
                            }
                            {user ?
                                <Button className='fw-semibold' onClick={handleLogOut} variant="primary">logOut</Button> :
                                <Button variant="primary">
                                    <Link className='text-white text-decoration-none fw-semibold' to='/login'>Login</Link>
                                </Button>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default Header;