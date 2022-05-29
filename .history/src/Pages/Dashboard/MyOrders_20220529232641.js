import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderManageTable from '../../Components/OrderManageTable';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${ user.email }`;
        fetch(url)
            .then(response => response.json())
        .then(data => setOrders(data))
    },[user])
    return (
        <div>
            <div>
                {
                    orders.map(order => <OrderManageTable />)
                }
            </div>
        </div>
    );
};

export default MyOrders;