import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app)

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    return (
        <div className='login'>
            <div>
                <h3 className='headline'>Please Login</h3>

                <button onClick={() => signInWithGoogle()} className='thirdPartyLogin'>Google</button>
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