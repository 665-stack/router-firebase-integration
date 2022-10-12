import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Home.css'
const Home = () => {
    const { user } = useFirebase();
    return (
        <div className='home'>
            <div>
                <h4 className='user-welcome'>Hi, {user ? user.displayName : "there!"}</h4>

                <h1 className='tagline'>Tracking system for <span>economy</span> of vehicle use and driver behavior</h1>
                <p>Reduces costs, increases safety</p>
                <div className="buttons">
                    <button className='readmore-button'>Read more</button>
                    <button className='pdf-button'>Download pdf</button>
                </div>
            </div>
        </div>
    );
};

export default Home;