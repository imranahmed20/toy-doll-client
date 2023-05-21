import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order }) => {
    const { _id, category, name, price, quantity, sellerName } = order;
    console.log(order)
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/orders/${_id}`}>
                    <button className='btn btn-success fw-semibold'>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default OrderRow;