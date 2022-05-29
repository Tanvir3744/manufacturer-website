import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

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
                    <div>
                        <h1 class="text-5xl font-bold">{productDetail.name}</h1>
                        <p class="py-6 m-0"><strong>Price :</strong> {productDetail.price}</p>
                        <p class="py-6 m-0"><strong>Quantity :</strong> {productDetail.available_quantity}</p>
                        <p class="py-6 m-0"><strong>Product Description :</strong> {productDetail.description}</p>
                        <p class="py-6 m-0"><strong>Price :</strong> {productDetail.price}</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;