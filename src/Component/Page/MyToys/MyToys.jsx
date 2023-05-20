import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Table } from 'react-bootstrap';
import Booking from './Booking/Booking';



const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrder] = useState([])

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
            })
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center mt-3 fw-bold mb-5 text-danger'>My Order Toy</h1>
            <div className='table-responsive'>
                <Table responsive bordered size="">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Available Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            myOrders.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyToys;