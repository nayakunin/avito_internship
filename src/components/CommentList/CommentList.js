import React from 'react';
import './CommentList.css';
import Comment from '../Comment/Comment';

function CommentList(props) {
    return (
        <div>
            {props.data.map((comment) => {
                return (
                    <Comment
                        key={comment.id}
                        date={comment.date}
                        text={comment.text}
                    />
                )
            })}
            <Comment
                key='1'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='2'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='3'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='4'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='5'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='6'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='7'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='8'
                date={1578054737927}
                text='текст'
            />
            <Comment
                key='9'
                date={1578054737927}
                text='текст'
            />
        </div>
    );
}

export default CommentList;