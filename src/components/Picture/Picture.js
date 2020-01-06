import React from 'react';
import './Picture.css';

function Picture(props) {
    const handleClick = (event) => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}`)
            .then((result) => result.json())
            .then((data) => {
                props.handlePopupOpen(data, window.scrollY);
            })
    }

    return (
        <img
            className='Picture'
            onClick={handleClick}
            src={props.url}
            alt={`with id:${props.id}`}
        />
    );
}

// class Picture extends Component {
//     constructor(props) {
//         super(props);
//         this.id = this.props.id;
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(event) {
//         fetch(`https://boiling-refuge-66454.herokuapp.com/images/${this.id}`)
//             .then((result) => result.json())
//             .then((data) => {
//                 this.props.handlePopupOpen(data, window.scrollY);
//             })
//     }

//     render() {
//         return (
//             <img
//                 className='Picture'
//                 onClick={this.handleClick}
//                 src={this.props.url}
//                 alt={`with id:${this.props.id}`}
//             />
//         );
//     }
// }

export default Picture;