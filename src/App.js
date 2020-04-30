import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';

const theme = {
	dark: {
		backgroundColor: 'black'
	},
	light: {
		backgroundColor: 'white'
	}
};

function App() {
	const { isDarkMode } = useContext(ThemeContext);
	const { dark, light } = theme;
	return (
		<div style={isDarkMode ? dark : light} className="App">
			<Navbar />
			<RegisterForm />
		</div>
	);
}

export default App;
