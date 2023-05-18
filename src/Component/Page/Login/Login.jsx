import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import login from '../../../image/login2.avif'
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='card col p-5'>
                    <h1 className='text-center fw-bold mb-5 text-primary'>Login</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='fw-semibold' variant="danger" type="submit">
                            Login
                        </Button>
                        <p className='mt-3'>Already have an account <Link to="/register">Register</Link></p>
                    </Form>
                    <p className='text-center fw-semibold'>Or</p>
                    <Button variant="outline-success" className='fw-semibold'><FaGoogle></FaGoogle> Google Login</Button>

                </div>
                <div className='col mr-3'>
                    <img src={login} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;