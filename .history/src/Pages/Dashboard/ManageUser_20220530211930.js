import React, { useEffect, useState } from 'react';

const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'https://fathomless-scrubland-15745.herokuapp.com/user';
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    })
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>User email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>{user.user}</th>
                                    <td>{user.email }</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;