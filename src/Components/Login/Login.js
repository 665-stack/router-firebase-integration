import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {

    const { signInWithGoogle } = useFirebase()

    return (
        <div className='login'>
            <div>
                <h3 className='headline'>Please Login</h3>

                <button onClick={signInWithGoogle} className='thirdPartyLogin'>Google</button>
                <button className='thirdPartyLogin'>Facebook</button>
                <button className='thirdPartyLogin'>GitHub</button>

                <br />

                <span className='or-Btn'>or</span>

                <form >
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <br />
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;