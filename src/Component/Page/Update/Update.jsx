import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {
    const updateUser = useLoaderData()
    const navigate = useNavigate()
    const { email, sellerName, photo, price, name, category, rating, detail, quantity, status } = updateUser;

    const handleChange = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detail = form.detail.value;
        const category = form.category.value;
        console.log(name, sellerName, email, photo, quantity, price, rating, detail, category)
        const updateOrders = {
            name,
            sellerName,
            email,
            quantity,
            price,
            rating,
            detail,
            category,
            photo,

        }
        fetch(`http://localhost:5000/orders/${updateUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myToy')
                }
            })
    }
    return (
        <div className='container'>
            <h1 className='text-center mb-5 mt-3 text-danger fw-bold'>Update Now</h1>
            <form onSubmit={handleChange}>
                <div className='row row-cols-1 row-cols-md-2 g-3'>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input type="text" name='name' className="form-control" id="exampleInputEmail1" defaultValue={name} aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Seller Name</label>
                        <input type="text" name='sellerName' defaultValue={sellerName} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input type="email" name='email' defaultValue={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Category Name</label>
                        <input type="text" name='category' defaultValue={category} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Price</label>
                        <input type="text" name='price' defaultValue={price} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Rating</label>
                        <input type="text" name='rating' defaultValue={rating} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">PhotoURL</label>
                        <input type="text" name='photo' defaultValue={photo} className="form-control" id="exampleInputPassword1" />
                    </div>

                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Details</label>
                    <textarea className="form-control" name='detail' defaultValue={detail} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className="btn btn-success fw-semibold">Update Now</button>
            </form>
        </div>
    );
};

export default Update;