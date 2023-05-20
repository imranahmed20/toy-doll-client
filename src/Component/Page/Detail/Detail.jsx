import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Detail = () => {
    const details = useLoaderData()
    console.log(details)
    const { _id, name, image, price, rating, detail, category } = details;
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 mt-3'>
                <div className="col">
                    <div className='mt-3'>
                        <h3 className="fs-1 fw-bold">{name}</h3>
                        <p className="fw-semibold mb-2 mt-3 fs-3">Category: {category}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-3">Price: ${price}</p>
                        <p className='fw-semibold fs-3'>Rating: {rating} <FaStar></FaStar> <FaStar></FaStar></p>
                        <p className='fw-semibold'>Detail: {detail}</p>
                    </div>

                </div>
                <div className="col">
                    <img src={image} className='img-fluid rounded' style={{ height: '380px', width: '100%' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Detail;