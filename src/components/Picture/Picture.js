import React from 'react';
import './Picture.css';

function Picture(props) {
    const handleClick = (event) => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}`)
            .then((result) => result.json())
            .then((data) => {
                props.handlePopupOpen(data);
            })
    }

    return (
        <img
            className='Picture'
            onClick={handleClick}
            src={props.url}
            alt={`with id:${props.id}`}
        />
    );
}

export default Picture;