import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import Time from '../Time/Time';
import './Blogs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setData] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const handleBookmark = (title) => {
        if(bookmarks.includes(title)){
            toast.info(`"${title}" blog is already bookmarked`);
        }else{
            const newBookmarks = [...bookmarks, title];
            setBookmarks(newBookmarks);
        }
        
    }

    const handleTime = (time) => {
        const newTimes = [...times, time];
        setTimes(newTimes);
    }
      
    return (
        
        <div className='blog-page-container'>
            <div className='blogs-container'>            
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleTime={handleTime}
                    ></Blog>)
                }
            </div>
            <div className='right-side-containter'>
                <Time times={times}></Time>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Blogs;