import React from 'react';
import { useParams } from 'react-router-dom';

const details = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            
        </div>
    );
};

export default details;