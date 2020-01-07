import React from 'react';
import './PopupWindow.css';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import { ReactComponent as Close } from './Close.svg';

function PopupWindow(props) {
    const popupWindow = React.createRef();
    const popupContent = React.createRef();
    const popupCloseBtn = React.createRef();
    const commentListRef = React.createRef();

    const handleClose = (event) => {
        const target = event.target;
        if (
            (target === popupWindow.current && target !== popupContent.current) ||
            (target === popupCloseBtn.current)
        ) {
            props.handlePopupClose();
        }
    }

    return (
        <div className='PopupWindow' onClick={handleClose} ref={popupWindow}>
            <div className='PopupWindow__content' ref={popupContent}>
                <Close className='PopupWindow__close-btn' onClick={handleClose} ref={popupCloseBtn} />
                <img
                    className='PopupWindow__pic'
                    src={props.picture.url}
                    alt={`with id:${props.picture.id}`}
                />
                <div className="PopupWindow__CommentList" ref={commentListRef}>
                    <CommentList data={props.picture.comments}/>
                </div>
                <div className="PopupWindow__CommentForm">
                    <CommentForm imageId={props.picture.id} />
                </div>
            </div>
        </div>
    );
}

// class PopupWindow extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClose = this.handleClose.bind(this);
//         this.popupWindow = React.createRef();
//         this.popupContent = React.createRef();
//         this.popupCloseBtn = React.createRef();
//     }

//     handleClose(event) {
//         const target = event.target;
//         if (
//             (target === this.popupWindow.current && target !== this.popupContent.current) ||
//             (target === this.popupCloseBtn.current)
//         ) {
//             this.props.handlePopupClose();
//         }
//     }

//     render() {
//         return (
//             <div className='PopupWindow' onClick={this.handleClose} ref={this.popupWindow}>
//                 <div className='PopupWindow__content' ref={this.popupContent}>
//                     <Close className='PopupWindow__close-btn' onClick={this.handleClose} ref={this.popupCloseBtn} />
//                     <img
//                         className='PopupWindow__pic'
//                         src={this.props.picture.url}
//                         alt={`with id:${this.props.picture.id}`}
//                     />
//                     <div className="PopupWindow__CommentList">
//                         <CommentList data={this.props.picture.comments} />
//                     </div>
//                     <div className="PopupWindow__CommentForm">
//                         <CommentForm />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default PopupWindow;