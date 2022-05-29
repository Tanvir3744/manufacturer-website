import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'parts.json'
        fetch(url)
            .then(response => response.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Products;