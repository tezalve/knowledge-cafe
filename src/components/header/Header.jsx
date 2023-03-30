import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    return (
        <>
            <nav className='navbar'>
                <h2>Knowledge Cafe</h2>
                <img className='authorImg' src={data[0].authorImg} alt="" />
            </nav>
            <hr />
        </>
    );
};

export default Header;