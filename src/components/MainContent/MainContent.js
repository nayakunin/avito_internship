import React, { Component } from 'react';
import './MainContent.css';
import PictureContainer from '../PictureContainer/PictureContainer';

class MainContent extends Component {
    render() {
        return (
            <main className="MainContent">
                <PictureContainer handlePopupOpen={this.props.handlePopupOpen}/>
            </main>
        );
    }
}

export default MainContent;