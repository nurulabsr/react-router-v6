import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <div className='nav-data'>
                <Link to="/">Home</Link>
                <Link style={{padding:'10px'}}  to="/article">Article</Link>
                <Link style={{padding:'10px'}}  to="/about">About</Link>
                <Link style={{padding:'10px'}}  to="/video">Video</Link>
                <Link  to="/images">Images</Link>
                <Link to="/user"> User </Link>
         
        </div>
    );
};

export default Header;