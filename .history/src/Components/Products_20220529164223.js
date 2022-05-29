import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-slate-700 font-bold text-4xl mt-4 mb-4'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-w-7xl px-12 gap-5 mt-8 mb-8'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;