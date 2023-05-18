import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../image/login.avif'
import { AuthContext } from '../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password)
        if (password.length < 6) {
            setError("Password must be 6 character")
        }
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, { displayName: name, photoURL: photo })
                const user = result.user;
                console.log(user)
                form.reset()
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)


            })

    }
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='card col p-5'>
                    <h1 className='text-center fw-bold mb-5 text-primary'>Register</h1>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="name" name='name' placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>PhotoURL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter PhoURL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='fw-semibold' variant="danger" type="submit">
                            Register
                        </Button>
                        <p className='text-danger mt-3'>{error}</p>
                        <p className='mt-3'>Already have an account <Link to="/login">Login</Link></p>
                    </Form>
                </div>
                <div className='col mr-3'>
                    <img src={login} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;