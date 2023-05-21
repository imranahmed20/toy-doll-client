import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import OrderRow from './OrderRow/OrderRow';
import { Table } from 'react-bootstrap';
import useTitle from '../../../Hooks/useTitle';

const AllToys = () => {
    const orders = useLoaderData()

    const [searchOrders, setSearchOrders] = useState(orders)

    useTitle("All Toys")
    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const search = orders.filter(order => order.category == name)
        setSearchOrders(search)
    }

    return (
        <div className='container mt-5' data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h1 className='text-center fw-bold mb-5 text-danger'>All Toys</h1>
            <form onSubmit={handleSearch}>
                <div className="input-group w-50 mx-auto  mb-5">
                    <input type="text" name='name' className="form-control" placeholder="Search Doll Name" aria-label="Username" aria-describedby="basic-addon1" />
                    <button type='submit' className='btn btn-danger fw-semibold'>Search</button>
                </div>
            </form>
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
                        searchOrders.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                    }
                </tbody>
            </Table>

        </div>

    );
};

export default AllToys;