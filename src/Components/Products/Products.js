import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products.css'

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='products'>
            <h2>Knock knock ! who is there ?</h2>
            <h5> It's <span className='userNameInProducts'>{user ? user.displayName : "Ghost"}</span> bro :)</h5>
        </div>
    );
};

export default Products;