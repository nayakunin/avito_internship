import React, { Component } from 'react';
import './PopupWindow.css';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import { ReactComponent as Close } from './Close.svg';

class PopupWindow extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.popupWindow = React.createRef();
        this.popupContent = React.createRef();
        this.popupCloseBtn = React.createRef();
    }

    handleClose(event) {
        const target = event.target;
        if (
            (target === this.popupWindow.current && target !== this.popupContent.current) ||
            (target === this.popupCloseBtn.current)
        ) {
            this.props.handlePopupClose();
        }
    }

    render() {
        return (
            <div className='PopupWindow' onClick={this.handleClose} ref={this.popupWindow}>
                <div className='PopupWindow__content' ref={this.popupContent}>
                    <Close className='PopupWindow__close-btn' onClick={this.handleClose} ref={this.popupCloseBtn}/>
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