import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setProductDetail(data));
    },[])
    console.log(id)
    return (
        <div>
            <h1>this is details page </h1>
        </div>
    );
};

export default Details;