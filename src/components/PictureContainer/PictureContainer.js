import React, { Component, useState, useEffect } from 'react';
import './PictureContainer.css';
import Picture from '../Picture/Picture';

function PictureContainer(props) {
    const [content, setCount] = useState([]);

    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((response) => response.json())
            .then((data) => data.map((elem) => {
                return (
                    <Picture 
                        key={elem.id} 
                        url={elem.url} 
                        id={elem.id}
                        handlePopupOpen={props.handlePopupOpen}    
                    />
                )
            }))
            .then((result) => setCount(result))
            .catch((err) => console.log(err));
    })

    return (
        <div className='PictureContainer'>{content}</div>
    );
}

// class PictureContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             content: []
//         }
//     }

//     componentDidMount() {
//         fetch('https://boiling-refuge-66454.herokuapp.com/images')
//             .then((response) => response.json())
//             .then((data) => data.map((elem) => {
//                 return (
//                     <Picture 
//                         key={elem.id} 
//                         url={elem.url} 
//                         id={elem.id}
//                         handlePopupOpen={this.props.handlePopupOpen}    
//                     />
//                 )
//             }))
//             .then((result) => {
//                 this.setState({
//                     content: result,
//                 })
//             })
//             .catch((err) => console.log(err));
//     }

//     render() {
//         return (
//             <div className='PictureContainer'>{this.state.content}</div>
//         )
//     }
// }

export default PictureContainer;