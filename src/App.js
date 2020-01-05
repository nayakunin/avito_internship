import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import PopupWindow from './components/PopupWindow/PopupWindow';

class App extends Component {
	constructor() {
		super();
		this.state = {
			popupIsOpen: false,
		};
		this.handlePopupOpen = this.handlePopupOpen.bind(this);
		this.handlePopupClose = this.handlePopupClose.bind(this);
	}

	handlePopupOpen(data) {
		this.setState({
			popupIsOpen: true,
			data,
		});
	}

	handlePopupClose() {
		this.setState({
			popupIsOpen: false,
		});
	}

	render() {
		let popup = this.state.popupIsOpen ?
			<PopupWindow
				picture={this.state.data}
				handlePopupClose={this.handlePopupClose}
			/> :
			null;
		return (
			<div>
				<Header />
				<MainContent handlePopupOpen={this.handlePopupOpen} />
				<Footer />
				{popup}
			</div>
		);
	}
}

export default App;
