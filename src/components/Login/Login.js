import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Login.css';

const auth = getAuth();

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
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
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;