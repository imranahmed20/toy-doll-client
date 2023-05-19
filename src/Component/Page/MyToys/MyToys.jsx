import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${user.email}`)
    // }, [])

    return (
        <div>
            <h1>This is my toys</h1>
        </div>
    );
};

export default MyToys;