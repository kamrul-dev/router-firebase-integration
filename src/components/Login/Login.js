import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {singnWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Please login here !</h2>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{margin:'20px'}}>
                <button onClick={singnWithGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;