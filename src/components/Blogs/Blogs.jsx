import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setData] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;