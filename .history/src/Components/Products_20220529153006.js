import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'parts.json'
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-w-7xl px-12'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;