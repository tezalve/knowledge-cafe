import React from 'react';
import './Blog.css'
import bookmarklogo from "../../../public/bookmark-regular.svg"

const Blog = (props) => {
    const {authorImg, authorName, blogTitle, img, time, publish} = props.blog;
    const handleBookmark = props.handleBookmark;
    const handleTime = props.handleTime;
    
    return (
        <div className='blog-container'>
            <img className='blog-img' src={img} alt="" />
            <div className='authorinfo'>
                <div className='authorinfo'>
                    <img className='authorImg' src={authorImg} alt="" />
                    <div>
                        <h4>{authorName}</h4>
                        <p className='para'>{publish}</p>
                    </div>
                </div>
                <p className='para'><span className='min'>{time} </span> min read<span className='bookmarks' onClick={() => handleBookmark(blogTitle)}><img className='bookmark' src={bookmarklogo} alt="" /></span></p>
            </div>
            <h2>{blogTitle}</h2>
            <p>#programming #beginners</p>
            <a onClick={() => handleTime(time)} className='mark'>Mark As Read</a>
        </div>
    );
};

export default Blog;