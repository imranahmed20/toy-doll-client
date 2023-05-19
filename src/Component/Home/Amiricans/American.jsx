import React from 'react';
import { Link } from 'react-router-dom';

const American = ({ american }) => {
    const { _id, name, image, price, rating } = american;
    return (
        <div>
            <div className="card">
                <img src={image} className='img-fluid p-2 rounded' style={{ height: '300px' }} alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold">{name}</h3>
                    <p className="fw-semibold mb-2 mt-3">Price: ${price}</p>
                    <p className='fw-semibold'>Rating: {rating}</p>
                    <Link to={`/americans/${_id}`}>
                        <button className='btn btn-success fw-semibold'>View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default American;