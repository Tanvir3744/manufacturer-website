import React, { useEffect, useState } from 'react';

const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'https://fathomless-scrubland-15745.herokuapp.com/user';
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers.data)
    })
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;