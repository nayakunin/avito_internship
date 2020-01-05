import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        let date = new Date(this.props.date);
        this.state = {
            date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
            text: this.props.text
        }
    }

    render() {
        return (
            <div className='Comment'>
                <p className='Comment__date'>{this.state.date}</p>
                <p className='Comment__content'>{this.state.text}</p>
            </div>
        );
    }
}

export default Comment;