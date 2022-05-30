import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const { _id,name, img, price, available_quantity, description } = props.product;
    const navigate = useNavigate()
    const navigateDetail = (id) => {
        navigate(`/details/${ id }`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p><strong>Price : </strong>{price}</p>
                    <p><strong>Avaialble Quantity : </strong>{available_quantity}</p>
                    <p className='truncate'><strong>Product Description : </strong>{description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={()=>navigateDetail(_id)} class="btn btn-neutral">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;