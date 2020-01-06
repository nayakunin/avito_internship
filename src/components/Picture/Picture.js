import React, { Component } from 'react';
import './Picture.css';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${this.id}`)
            .then((result) => result.json())
            .then((data) => {
                this.props.handlePopupOpen(data);
            })
    }

    render() {
        return (
            <img
                className='Picture'
                onClick={this.handleClick} 
                src={this.props.url} 
                alt={`with id:${this.props.id}`}
            />
        );
    }
}

export default Picture;