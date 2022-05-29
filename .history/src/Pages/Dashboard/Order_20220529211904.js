import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
    },[])
    return (
        <div>
            this is my order
        </div>
    );
};

export default Order;