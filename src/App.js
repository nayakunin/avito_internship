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

export default App;
