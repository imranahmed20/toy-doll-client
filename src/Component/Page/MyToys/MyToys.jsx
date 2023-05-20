import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Table } from 'react-bootstrap';
import Booking from './Booking/Booking';
import Swal from 'sweetalert2'



const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrder] = useState([])

    const url = `https://toy-doll-server.vercel.app/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
            })
    }, [])

    const handleDelete = id => {
        console.log('hello', id)
        fetch(`https://toy-doll-server.vercel.app/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        "Delete!",
                        "You Add Toy has been delete.",
                        "success"
                    )
                    const remaining = myOrders.filter(booking => booking._id !== id)
                    setMyOrder(remaining)

                }
            })

    }

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
                            myOrders.map(booking => <Booking
                                key={booking._id}
                                handleDelete={handleDelete}
                                booking={booking}></Booking>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyToys;