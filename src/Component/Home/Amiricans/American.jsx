import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const American = ({ american }) => {
    const { _id, name, image, price, rating } = american;
    return (
        <div>
            <div className="card">
                <img src={image} className='img-fluid p-2 rounded' style={{ height: '300px' }} alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold fs-3">{name}</h3>
                    <p className="fw-semibold mb-2 mt-3 fs-5">Price: ${price}</p>
                    <p className='fw-semibold fs-5'>Rating: {rating} <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt></p>
                    <Link to={`/americans/${_id}`}>
                        <button className='btn btn-success fw-semibold'>View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default American;