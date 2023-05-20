import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderRow from './OrderRow/OrderRow';
import { Table } from 'react-bootstrap';

const AllToys = () => {
    const orders = useLoaderData()
    return (
        <div className='container mt-5'>
            <h1 className='text-center fw-bold mb-5 text-danger'>All Toys</h1>
            <div className="input-group w-50 mx-auto  mb-5">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <button className='btn btn-danger fw-semibold'>Search</button>
            </div>
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