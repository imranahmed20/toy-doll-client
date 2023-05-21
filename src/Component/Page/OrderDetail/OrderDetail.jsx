import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import useTitle from '../../../Hooks/useTitle';

const OrderDetail = () => {
    const orderDetails = useLoaderData()
    useTitle('Details')
    const { name, rating, detail, price, category, photo, quantity, email, sellerName } = orderDetails;
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 mt-3'>
                <div className="col" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='mt-3'>
                        <h3 className="fs-1 fw-bold">{name}</h3>
                        <p className="fw-semibold mb-2 mt-3 fs-5">Seller Name: {sellerName}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-5">Seller Email: {email}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-5">Category: {category}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-5">Price: ${price}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-5">Quantity: ${quantity}</p>
                        <p className='fw-semibold fs-5'>Rating: {rating} <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStarHalfAlt className='text-warning'></FaStarHalfAlt></p>
                        <p className='fw-semibold'>Detail: {detail}</p>
                    </div>
                </div>
                <div className="col" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={photo} className='img-fluid rounded' style={{ height: '440px', width: '100%' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;