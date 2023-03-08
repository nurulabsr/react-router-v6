import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    // console.log(user);
    // console.log(user.address);
    // console.log(user.address.city);

    return (
        <div style={{padding: "50px"}}>
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>city: {user.address.city}, street: {user.address.street}, gipcode: {user.address.zipcode}. </p>

        </div>
    );
};

export default UserDetail;