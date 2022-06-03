import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Details = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    console.log(user)

    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const url = `https://fathomless-scrubland-15745.herokuapp.com/products/${ id }`
        fetch(url)
            .then(response => response.json())
            .then(data => setProductDetail(data));
    }, [])
    console.log(id)

    const handleOrder = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const product = event.target.product.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;

        const order = {
            name: name,
            email: email,
            product: product,
            address: address,
            phone: phone,
            quantity:quantity
        }
        
        console.log(name, email, product, address, phone, quantity)

        const url = `https://fathomless-scrubland-15745.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
    }
    
    return (
        <div>
            <div class="hero min-h-screen max-w-7xl px-12">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={productDetail.img} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-8 '>
                        <h1 class="text-5xl font-bold mb-4">{productDetail.name}</h1>
                        <p className='py-1'><strong>Price :</strong> {productDetail.price}</p>
                        <p className='py-1'><strong>Quantity :</strong> {productDetail.available_quantity}</p>
                        <p className='py-1'><strong>Product Description :</strong> {productDetail.description}</p>
                        <p className='py-1'><strong>Price :</strong> {productDetail.price}</p>
                    </div>
                </div>
            </div>
            <div className="order">
                <h2 className='font-semibold text-4xl text-dark text-center mt-6'> Order This Product</h2>
                <form onSubmit={handleOrder} className='grid grid-cols-1 place-items-center mt-8'>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mt-4" />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs mt-4" />
                    <input type="text" name="product" value={productDetail.name} className="input input-bordered w-full max-w-xs mt-4" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mt-4" />
                    <input type="text" name="quantity" min={50} max={150} placeholder="Order Quantity" className="input input-bordered w-full max-w-xs mt-4" />
                    <input type="submit" value="Order now"    className="btn btn-secondary w-full max-w-xs mt-4" />
                </form>
            </div>
        </div>
    );
};

export default Details;