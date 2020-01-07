import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm(props) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.imageId}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                comment,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => console.log(response))
        .then(() => {
            setName('');
            setComment('');
        })
    }

    return (
        <form className='CommentForm' onSubmit={handleSubmit}>
            <input
                className='CommentForm__input'
                type='text'
                placeholder='Ваше имя'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                className='CommentForm__input'
                type='text'
                placeholder='Ваш комментарий'
                value={comment}
                onChange={(event) => setComment(event.target.value)}
            />
            <input
                className='CommentForm__submit'
                type='submit'
                value='Оставить комментарий'
            />
        </form>
    );
}

export default CommentForm;