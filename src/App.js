import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import PopupWindow from './components/PopupWindow/PopupWindow';

function App() {
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [data, setData] = useState();
    const [popup, setPopup] = useState(null);

    const handlePopupOpen = (content, scrollPos) => {
        setData(content);
        setPopupIsOpen(true);
    }

    const handlePopupClose = () => {
        setPopupIsOpen(false);
    }

    useEffect(() => {
        if (popupIsOpen) {
            setPopup(
                <PopupWindow
                    picture={data}
                    handlePopupClose={handlePopupClose}
                />
            );
        } else {
            setPopup(null);
        }
    }, [popupIsOpen, data])

    return (
        <div>
            <Header />
            <MainContent handlePopupOpen={handlePopupOpen}/>
            <Footer />
            {popup}
        </div>
    );
}

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             popupIsOpen: false,
//         };
//         this.handlePopupOpen = this.handlePopupOpen.bind(this);
//         this.handlePopupClose = this.handlePopupClose.bind(this);
//     }

//     handlePopupOpen(data, scrollY) {
//         this.setState({
//             popupIsOpen: true,
//             data,
//         });
//         document.body.style.position = 'fixed';
//         document.body.style.top = `-${scrollY}px`;
//     }

//     handlePopupClose() {
//         const body = document.body;
//         const scrollY = body.style.top;
//         body.style.position = '';
//         body.style.top = '';
//         window.scrollTo(0, scrollY * -1);
//         this.setState({
//             popupIsOpen: false,
//         });
//     }

//     render() {
//         let popup = this.state.popupIsOpen ?
//             <PopupWindow
//                 picture={this.state.data}
//                 handlePopupClose={this.handlePopupClose}
//             /> :
//             null;
//         return (
//             <div>
//                 <Header />
//                 <MainContent handlePopupOpen={this.handlePopupOpen} />
//                 <Footer />
//                 {popup}
//             </div>
//         );
//     }
// }

export default App;
