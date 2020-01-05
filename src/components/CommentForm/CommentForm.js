import React, {Component} from 'react';
import './CommentForm.css';

class CommentForm extends Component {
    render() {
        return (
            <form className='CommentForm'>
                <input className='CommentForm__input' type='text' name='username' placeholder='Ваше имя'/>
                <input className='CommentForm__input' type='text' name='comment' placeholder='Ваш комментарий'/>
                <input className='CommentForm__submit' type='submit' value='Оставить комментарий'/>
            </form>
        );
    }
}

export default CommentForm;