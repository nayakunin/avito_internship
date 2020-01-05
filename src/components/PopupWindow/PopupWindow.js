import React, { Component } from 'react';
import './PopupWindow.css';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import { ReactComponent as Close } from './Close.svg';

class PopupWindow extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event) {
        const popupWindow = document.getElementsByClassName('PopupWindow');
        const popupContent = popupWindow.getElementsByClassName('PopupWindow__content');
        const popupCloseBtn = popupWindow.getElementsByClassName('PopupWindow__close-btn');
        const target = event.target;
        if (
            (target === popupWindow && target !== popupContent) ||
            (target === popupCloseBtn)
        ) {
            this.props.handlePopupClose();
        }
    }

    render() {
        return (
            <div className='PopupWindow' onClick={this.handleClose}>
                <div className='PopupWindow__content'>
                    <Close className='PopupWindow__close-btn' onClick={this.handleClose}/>
                    <div className='PopupWindow__block_left'>
                        <img 
                            className='PopupWindow__pic'
                            src={this.props.picture.url} 
                            alt={`with id:${this.props.picture.id}`}
                        />
                        <CommentForm />
                    </div>
                    <div className='PopupWindow__block_comments'>
                        <CommentList data={this.props.picture.comments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupWindow;