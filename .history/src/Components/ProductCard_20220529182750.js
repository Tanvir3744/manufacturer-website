import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const {name, img, price, available_quantity, description } = props.product;
    console.log(props)
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
                        <Link to="/detail"  class="btn btn-neutral">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;