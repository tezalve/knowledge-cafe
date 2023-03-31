import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css'


const Bookmarks = (props) => {
    const {bookmarks} = props;
    return (
        
        <div>
            <p>Bookmarked Blogs : <span>{bookmarks.length}</span></p>
            <div className='bookmarks'>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmarks.indexOf(bookmark)}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;