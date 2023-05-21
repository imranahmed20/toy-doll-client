import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'




const AddToy = () => {
    const navigate = useNavigate()

    const handleAddDoll = event => {
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
        const order = {
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
        fetch('https://toy-doll-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Add Toy successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    navigate('/myToy')
                    form.reset()
                }
            })


    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center text-danger fw-bold mb-5'>Add A Toy</h1>
            
            <form onSubmit={handleAddDoll}>
                <div className='row row-cols-1 row-cols-md-2 g-3'>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input type="text" name='name' className="form-control" id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Seller Name</label>
                        <input type="text" name='sellerName' placeholder='Seller Name' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Category Name</label>
                        <input type="text" name='category' placeholder='Category Name' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Price</label>
                        <input type="text" name='price' placeholder='Price' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Rating</label>
                        <input type="text" name='rating' placeholder='Rating' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">Quantity</label>
                        <input type="text" name='quantity' placeholder='Quantity' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label fw-semibold">PhotoURL</label>
                        <input type="text" name='photo' placeholder='PhotoURL' className="form-control" id="exampleInputPassword1" />
                    </div>

                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Details</label>
                    <textarea className="form-control" name='detail' placeholder='Detail' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary fw-semibold">Add Toy</button>
            </form>
        </div>
    );
};

export default AddToy;