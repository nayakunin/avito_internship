import React from 'react';
import './Comment.css';

function Comment(props) {
    let date = new Date(props.date);
    date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    
    return (
        <div className='Comment'>
            <p className='Comment__date'>{date}</p>
            <p className='Comment__content'>{props.text}</p>
        </div>
    );

}

export default Comment;