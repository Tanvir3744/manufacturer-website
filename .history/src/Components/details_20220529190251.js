import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Details = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)

    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${ id }`
        fetch(url)
            .then(response => response.json())
            .then(data => setProductDetail(data));
    }, [])
    console.log(id)
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
                <form className='grid grid-cols-1 place-items-center mt-8'>
                    <input type="text" disabled value={user.displayName} class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="text" placeholder="" class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Details;