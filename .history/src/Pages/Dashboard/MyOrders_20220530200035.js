import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderManageTable from '../../Components/OrderManageTable';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://fathomless-scrubland-15745.herokuapp.com/orders?email=${ user.email }`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${localStorage.getItem('access token')}`
            }
        })
            .then(response => {
                console.log(response)
                if (response.status === 401 || response.status === 403) {
                    //write something
                }
                return response.json()
            })
            .then(data => setOrders(data))
    }, [user])
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold text-accent p-2 capitalize'>{user.displayName || ""} you can manage your order from here</h2>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
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
                                orders.map((order, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.displayName}</td>
                                        <td>{order.email}</td>
                                        <td>{order.product}</td>
                                        <td>{order.address}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.phone}</td>
                                        <td><button className="btn btn-neutral">Delete</button></td>
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