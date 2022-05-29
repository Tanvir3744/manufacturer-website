import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${email}`;
    },[user])
    return (
        <div>
            my order
        </div>
    );
};

export default MyOrders;