import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Products.css'
const Products = () => {
    const { user } = useFirebase();
    return (
        <div className='products'>
            <h2>Knock knock ! who is there ?</h2>
            <h5> It's <span className='userNameInProducts'>{user ? user.displayName : "Ghost"}</span> bro :)</h5>
        </div>
    );
};

export default Products;