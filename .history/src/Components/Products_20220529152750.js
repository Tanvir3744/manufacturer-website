import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'parts.json'
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>available products</h1>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;