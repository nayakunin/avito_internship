import React, {Component} from 'react';
import './CommentList.css';
import Comment from '../Comment/Comment';

class CommentList extends Component {
    render() {
        let comments = this.props.data.map((comment) => {
            return (
                <Comment 
                    key={comment.id}
                    date={comment.date}
                    text={comment.text}
                />
            )
        })
        return (
            <div className='CommentList'>
                {comments}
            </div>
        );
    }
}

export default CommentList;