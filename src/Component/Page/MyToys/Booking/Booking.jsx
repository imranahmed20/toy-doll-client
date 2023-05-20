import React from 'react';
import { Link } from 'react-router-dom';

const Booking = ({ booking }) => {
    const { _id, category, detail, photo, email, name, price, quantity, sellerName } = booking;

    const handleDelete = id => {
        console.log('hello', id)
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
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
                <button onClick={() => handleDelete(_id)} className='btn btn-success fw-semibold'>Delete</button>
            </td>
        </tr>

    );
};

export default Booking;