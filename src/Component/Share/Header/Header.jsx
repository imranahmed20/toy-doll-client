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
                        Doll Marketplace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='fw-semibold me-4 text-decoration-none text-dark' to='/'>Home</Link>
                            <Link className='fw-semibold me-4 text-decoration-none  text-dark' to='/allToy'>All Toys</Link>
                            <Link className='fw-semibold me-4 text-decoration-none text-dark' to='/addToy'>Add A Toy</Link>
                            {
                                user?.email ? < Link className='fw-semibold text-decoration-none  text-dark me-4' to='/myToy'>My Toy</Link> :
                                    <>< Link className='fw-semibold text-decoration-none text-dark me-4' to='/myToy'>My Toy</Link></>
                            }
                            <Link className='fw-semibold me-0 text-decoration-none  text-dark' to='/blog'>Blog</Link>

                        </Nav>

                        <Form className="d-flex align-items-center">


                            {
                                user ?
                                    <img style={{ width: '40px', height: '40px' }} title={user?.displayName} className='rounded-circle me-3 mt-2' src={user?.photoURL} alt="" />
                                    :
                                    <FaUser className='me-3' style={{ fontSize: '2rem' }}></FaUser>
                            }
                            {user?.email ?

                                <Button className='fw-semibold' onClick={handleLogOut} variant="primary">LOGOUT</Button>
                                :
                                <Button variant="primary">
                                    <Link className='text-white text-decoration-none fw-semibold' to='/login'>LOGIN</Link>
                                </Button>
                            }

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >

    );
};

export default Header;