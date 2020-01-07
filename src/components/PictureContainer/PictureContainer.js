import React, { useState, useEffect } from 'react';
import './PictureContainer.css';
import Picture from '../Picture/Picture';

function PictureContainer(props) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((response) => response.json())
            .then((data) => data.map((elem) => {
                return (
                    <Picture 
                        key={elem.id} 
                        url={elem.url} 
                        id={elem.id}
                        handlePopupOpen={props.handlePopupOpen}    
                    />
                )
            }))
            .then((result) => setContent(result))
            .catch((err) => console.log(err));
    }, [props.handlePopupOpen])

    return (
        <div className='PictureContainer'>{content}</div>
    );
}

export default PictureContainer;