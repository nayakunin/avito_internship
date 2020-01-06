import React from 'react';
import './MainContent.css';
import PictureContainer from '../PictureContainer/PictureContainer';

function MainContent(props) {
    return (
        <main className="MainContent">
            <PictureContainer handlePopupOpen={props.handlePopupOpen}/>
        </main>
    );
}

// class MainContent extends Component {
//     render() {
//         return (
//             <main className="MainContent">
//                 <PictureContainer handlePopupOpen={this.props.handlePopupOpen}/>
//             </main>
//         );
//     }
// }

export default MainContent;