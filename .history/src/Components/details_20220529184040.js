import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const url = `https://fathomless-scrubland-15745.herokuapp.com/products/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setProductDetail(data));
    },[])
    console.log(id)
    return (
        <div>
            <h1>{productDetail.name}</h1>
        </div>
    );
};

export default Details;