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

// class Comment extends Component {
//     constructor(props) {
//         super(props);
//         let date = new Date(this.props.date);
//         this.state = {
//             date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
//             text: this.props.text
//         }
//     }

//     render() {
//         return (
//             <div className='Comment'>
//                 <p className='Comment__date'>{this.state.date}</p>
//                 <p className='Comment__content'>{this.state.text}</p>
//             </div>
//         );
//     }
// }

export default Comment;