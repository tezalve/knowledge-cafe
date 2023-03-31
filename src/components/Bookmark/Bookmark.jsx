import React from 'react';
import './Bookmark.css'


const Bookmark = ({bookmark}) => {
    return (
        <div className='book'>
            {bookmark}
        </div>
    );
};

export default Bookmark;