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
            <h1>manage users</h1>
        </div>
    );
};

export default ManageUser;