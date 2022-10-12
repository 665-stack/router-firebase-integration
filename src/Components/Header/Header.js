import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log(user?.uid)
    return (
        <div className='header'>
            <p className='logo'>EcoLOGIN</p>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>

                <span className='userName'> {user?.displayName && user?.displayName}</span>

                {
                    user?.uid
                        ?
                        <button className='signOut-btn' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/login'>Login</Link>
                }

            </nav>
        </div >
    );
};

export default Header;