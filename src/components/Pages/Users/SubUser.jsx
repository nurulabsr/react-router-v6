import React from 'react';
import { Link } from 'react-router-dom';

const SubUser = ({user}) => {
    // console.log(user);
    const {name, id, email, username} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p> {email}</p>
            <Link to={`/user/${id}`}>{username}</Link>
        </div>
    );
};

export default SubUser;