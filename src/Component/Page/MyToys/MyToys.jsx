import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Table } from 'react-bootstrap';
import Booking from './Booking/Booking';
import Swal from 'sweetalert2'
import useTitle from '../../../Hooks/useTitle';



const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrder] = useState([])
    useTitle("My Toy")

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
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    const remaining = myOrders.filter(booking => booking._id !== id)
                    setMyOrder(remaining)

                }
            })

    }

    return (
        <div className='container' data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
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