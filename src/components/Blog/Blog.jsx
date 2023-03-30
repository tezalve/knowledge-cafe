import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {authorImg, authorName, blogTitle, img} = props.blog;
    return (
        <div>
            <img className='blog-img' src={img} alt="" />
        </div>
    );
};

export default Blog;