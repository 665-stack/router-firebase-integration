import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css'

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);

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