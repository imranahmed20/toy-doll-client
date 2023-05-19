import React from 'react';

const Barbie = ({ barbie }) => {
    const { name, image, price, rating } = barbie;
    return (
        <div className='col'>
            <div className="card">
                <img src={image} className='img-fluid p-2 rounded' style={{ height: '300px' }} alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold">{name}</h3>
                    <p className="fw-semibold mb-2 mt-3">Price: ${price}</p>
                    <p className='fw-semibold'>Rating: {rating}</p>
                    <button className='btn btn-success fw-semibold'>View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Barbie;