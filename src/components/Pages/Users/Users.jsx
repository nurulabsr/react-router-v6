import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubUser from './SubUser';

const Users = () => {
    const users = useLoaderData();
    // console.log(users[1].name);
    return (
        <div style={{margin:"120px"}}>
            <h1>User page</h1>

            {
                users.map((user)=> <SubUser key={user.id} user={user}></SubUser>)
            }
        </div>
    );
};

export default Users;