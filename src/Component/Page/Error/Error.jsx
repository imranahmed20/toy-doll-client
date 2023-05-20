import React from 'react';
import image from '../../../image/error5.avif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-5'>
            <img src={image} alt="" />
            <br />
            <button className='btn btn-danger mt-3'> <Link to='/' className='text-decoration-none text-white fw-semibold'>Go to Home</Link></button>
        </div>
    );
};

export default Error;