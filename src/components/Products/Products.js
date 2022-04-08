import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products.css'

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Hey, Who is there?</h2>
            <h5>{user ? user.displayName : 'No one is here!'}</h5>
        </div>
    );
};

export default Products;