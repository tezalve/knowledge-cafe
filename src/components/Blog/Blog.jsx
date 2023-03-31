import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {authorImg, authorName, blogTitle, img} = props.blog;
    return (
        <div className='blog-container'>
            <img className='blog-img' src={img} alt="" />
            <div className='authorinfo'>
                <div className='authorinfo'>
                    <img className='authorImg' src={authorImg} alt="" />
                    <div>
                        <h4>{authorName}</h4>
                        <p className='para'>Mar 15 (4 days ago)</p>
                    </div>
                </div>
                <p className='para'><span className='min'>05</span> min read <span><img className='bookmark' src="public\bookmark-regular.svg" alt="" /></span></p>
            </div>
            <h2>{blogTitle}</h2>
            <p className='para'>#programming #beginners</p>
            <a>Mark As Read</a>
        </div>
    );
};

export default Blog;