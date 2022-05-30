import React from 'react';
import { Link } from 'react-router-dom';
import Disconnected from '../../assets/images/dribbble_1.gif';
const NotFound = () => {
    return (
        <div className='grid place-items-center'>
            <img src={Disconnected} alt="" />
            <h1 className="text-4xl font-semibold self-center"> Page not Found</h1>
            <Link to="/" className="btn btn-primary text-white rounded-lg bg-gradient-to-r from-secondary to-primary">Back To Home</Link>
        </div>
    );
};

export default NotFound;