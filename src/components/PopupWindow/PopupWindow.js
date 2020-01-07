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

export default PopupWindow;