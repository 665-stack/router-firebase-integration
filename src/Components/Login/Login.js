import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='login'>
            <div>
                <h3 className='headline'>Please Login</h3>
                <form >
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <br />
                    <input className='submit-btn' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Login;