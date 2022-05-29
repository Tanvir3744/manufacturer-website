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
    }, [user])
    return (
        <div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Address</th>
                                <th>Quantity</th>
                                <th>Phone</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr>
                                    <td>{user.displayName}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.name}</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td>Blue</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;