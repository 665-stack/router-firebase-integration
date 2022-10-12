import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <h1 className='tagline'>Tracking system for <span>economy</span> of vehicle use and driver behavior</h1>
            <p>Reduces costs, increases safety</p>
            <div className="buttons">
                <button className='readmore-button'>Read more</button>
                <button className='pdf-button'>Download pdf</button>
            </div>
        </div>
    );
};

export default Home;