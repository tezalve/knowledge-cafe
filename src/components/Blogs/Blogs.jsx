import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setData] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const handleMarkAsRead = (title) => {
        const newBookmarks = [...bookmarks, title];
        setBookmarks(newBookmarks);
    }
      
    return (
        <div className='blog-page-container'>
            <div className='blogs-container'>            
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
            <div className='right-side-containter'>
                <p>Spent time on read : <span>123</span> min</p>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;