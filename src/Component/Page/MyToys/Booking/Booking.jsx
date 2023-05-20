import React from 'react';
import { Link } from 'react-router-dom';

const Booking = ({ booking, handleDelete }) => {
    const { _id, category, detail, photo, email, name, price, quantity, sellerName } = booking;

    return (
        <tr>
            <td>
                <div>
                    <img src={photo} className='img-fluid' style={{ height: '80px', width: '100%' }} alt="" />
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{detail.slice(0, 65)}...</td>
            <td>{quantity}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger fw-semibold'>Delete</button>
            </td>
            <td>
                <Link to={`/update/${_id}`}>
                    <button className='btn btn-success fw-semibold'>Update</button>
                </Link>
            </td>
        </tr>

    );
};

export default Booking;