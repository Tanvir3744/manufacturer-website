import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>this is details page </h1>
        </div>
    );
};

export default Details;