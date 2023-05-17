import React from 'react';
import image from '../../../assets/error.webp'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
         <img src={image} alt="" />
         <br />
        <button className='btn btn-danger mt-3'> <Link to='/' className='text-decoration-none text-white fw-semibold'>Go to Home</Link></button>
        </div>
    );
};

export default Error;