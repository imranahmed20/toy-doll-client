import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderRow from './OrderRow/OrderRow';
import { Table } from 'react-bootstrap';

const AllToys = () => {
    const orders = useLoaderData()
    return (
        <div className='container mt-5'>
            <Table bordered size="">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                    }
                </tbody>
            </Table>

        </div>

    );
};

export default AllToys;