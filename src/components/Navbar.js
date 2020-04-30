import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Navbar.css';

const theme = {
	light: {
		backgroundColor: 'white',
		color: 'black'
	},
	dark: {
		backgroundColor: 'darkgray',
		color: 'white'
	}
};

const Navbar = () => {
	const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
	const { light, dark } = theme;

	console.log(isDarkMode);
	return (
		<div style={isDarkMode ? dark : light} className="Navbar">
			<input type="checkbox" onChange={toggleDarkMode} />
			<label>darkmode</label>
		</div>
	);
};

export default Navbar;
