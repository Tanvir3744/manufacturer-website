import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <h2 className='text-red-600 font-semibold text-4xl'>Welcome {user.displayName} To Your Dashboard</h2>
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/*  Page content here  */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/*   Sidebar content here */}
                        <li><Link to="/dashboard">Sidebar Item 1</Link></li>
                        <li><Link to='/dashboard/review'>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;