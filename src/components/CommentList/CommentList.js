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
        </div>
    );
}


// class CommentList extends Component {
//     render() {
//         let comments = this.props.data.map((comment) => {
//             return (
//                 <Comment 
//                     key={comment.id}
//                     date={comment.date}
//                     text={comment.text}
//                 />
//             )
//         })
//         return (
//             <div className='CommentList'>
//                 {comments}
//             </div>
//         );
//     }
// }

export default CommentList;