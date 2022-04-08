import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home Page</h2>
            <p>Current user is: {user ? user.displayName : 'No user here !'}</p>
        </div>
    );
};

export default Home;