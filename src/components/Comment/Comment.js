import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <div className='Comment'>
                <p className='Comment__date'>{this.props.date}</p>
                <p className='Comment__content'>{this.props.text}</p>
            </div>
        );
    }
}

export default Comment;