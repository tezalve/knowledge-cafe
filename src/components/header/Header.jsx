import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <h2>Knowledge Cafe</h2>
                <img className='authorImg' src="https://miro.medium.com/v2/resize:fill:88:88/1*dB2O3mMPNqKGeIaBsjXQBQ.jpeg" alt="" />
            </nav>
            <hr />
        </>
    );
};

export default Header;