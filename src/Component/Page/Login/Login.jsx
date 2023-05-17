import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


const Login = () => {
    return (
        <div>
            <Container className='card p-5 w-50 mx-auto mt-4 mb-3'>
                <h1 className='text-center fw-bold mb-5'>Please Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='fw-semibold' variant="success" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-3'> Don't have an account <Link to="/register">Register</Link></p>
            </Container>
        </div>
    );
};

export default Login;