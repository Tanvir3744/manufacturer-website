import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/order?email=${ user.email }`;
        fetch(url)
            .then(response => response.json())
            .then(data => setOrders(data));
    },[user])
    return (
        <div>
            {orders.length}
        </div>
    );
};

export default Order;