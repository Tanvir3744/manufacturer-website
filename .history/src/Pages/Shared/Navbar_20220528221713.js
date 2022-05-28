import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [user] = useAuthState(auth);

    //handle signOut
    const logout = () => {
        signOut(auth);
        toast('Successfully Loged Out')
    };

    //menu items stored here
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myorder">My Orders</Link></li>
        <li><Link to="/addreview">Add A Review</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>{user ? <button onClick={logout} className='text-white btn btn-primary bg-gradient-to-r from-secondary to-primary'>{user.displayName}</button> : <Link to="/login">Log in </Link>} </li> 
    </>
    console.log(user)
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Ace Tools</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;