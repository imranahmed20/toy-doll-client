import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import useTitle from '../../../Hooks/useTitle';

const Detail = () => {
    const details = useLoaderData()
    useTitle("Details")
    const { _id, name, image, price, rating, detail, category } = details;
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 mt-3'>
                <div className="col" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='mt-3'>
                        <h3 className="fs-1 fw-bold">{name}</h3>
                        <p className="fw-semibold mb-2 mt-3 fs-4">Category: {category}</p>
                        <p className="fw-semibold mb-2 mt-3 fs-4">Price: ${price}</p>
                        <p className='fw-semibold fs-4'>Rating: {rating} <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar> <FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt></p>
                        <p className='fw-semibold'>Detail: {detail}</p>
                    </div>

                </div>
                <div className="col" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={image} className='img-fluid rounded' style={{ height: '380px', width: '100%' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Detail;