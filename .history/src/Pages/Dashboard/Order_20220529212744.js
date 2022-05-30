import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        /*  const url = `https://fathomless-scrubland-15745.herokuapp.com/orders?email=${ user.email }`; */
        const url = ``
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