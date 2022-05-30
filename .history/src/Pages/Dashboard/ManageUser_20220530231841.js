import React, { useEffect, useState } from 'react';

const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'https://fathomless-scrubland-15745.herokuapp.com/user';
        fetch(url, {
            method: 'GET',
            headers: {
                'authrization' : `Bearer ${ localStorage.getItem('access token') }`
            }
        })
            .then(response => response.json())
            .then(data => setUsers(data))
    })

    const makeAdmin = () => {
        const email = users.email;
        console.log(email)
        const url = `https://fathomless-scrubland-15745.herokuapp.com/user/admin/${ email }`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('access token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>User email</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>{user.user}</th>
                                    <td>{user.email}</td>
                                    <td><button onClick={makeAdmin} className="btn btn-priamry text-white">Make Admin</button></td>
                                    <td><button className="btn btn-accent text-white">Remove Admin</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;