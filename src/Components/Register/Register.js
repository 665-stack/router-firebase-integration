import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <div>
                <h3 className='headline'>Please Register now!</h3>
                <form >
                    <input type="text" placeholder='Your Name' />
                    <br />
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

export default Register;