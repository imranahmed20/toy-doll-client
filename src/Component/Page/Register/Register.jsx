import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='card p-5 w-50 mx-auto mt-4 mb-3'>
                <h1 className='text-center fw-bold mb-5'>Please Register</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='fw-semibold' variant="success" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-3'>Already have an account <Link to="/login">Login</Link></p>
            </Container>
        </div>
    );
};

export default Register;