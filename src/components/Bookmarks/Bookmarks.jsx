import React from 'react';

const Bookmarks = (props) => {
    const {bookmarks} = props;
    return (
        <div>
            <p>Bookmarked Blogs : <span>{bookmarks.length}</span></p>
            <div>
                {bookmarks}
            </div>
        </div>
    );
};

export default Bookmarks;