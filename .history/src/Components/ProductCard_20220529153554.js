import React from 'react';

const ProductCard = (props) => {
    const {name, img, price, availabe_quantity, description } = props.product;
    console.log(props)
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p><strong>Price : </strong>{price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;