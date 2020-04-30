import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { ThemeContext } from '../contexts/ThemeContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../styles/RegisterForm.css';

const theme = {
	dark: {
		backgroundColor: 'darkgray',
		color: 'white',
		boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)'
	},
	light: {
		backgroundColor: 'white',
		color: 'black'
	}
};

const RegisterForm = () => {
	const [ nameInput, handleNameChange, resetName ] = useInputState('');
	const [ emailInput, handleEmailChange, resetEmail ] = useInputState('');
	const [ passwordInput, handlePasswordChange, resetPassword ] = useInputState('');
	const { isDarkMode } = useContext(ThemeContext);

	const handleSubmit = (e) => {
		console.log('submitted');
		resetName();
		resetEmail();
		resetPassword();
		e.preventDefault();
	};

	const handleFirstNext = () => {
		console.log('handleFirstNext clicked');
	};

	const { dark, light } = theme;
	return (
		<div className="RegisterFormContainer">
			<div style={isDarkMode ? dark : light} className="registerForm">
				<h3>Register</h3>
				<form onSubmit={handleSubmit}>
					<SwitchTransition>
						<CSSTransition>
							<div>
								<label>Full name:</label>
								<input
									onChange={handleNameChange}
									type="text"
									placeholder="Jeremiah Quill"
									value={nameInput}
								/>

								<label>Email:</label>
								<input
									onChange={handleEmailChange}
									type="email"
									placeholder="jcq5010@gmail.com"
									value={emailInput}
								/>

								<label>Password:</label>
								<input
									onChange={handlePasswordChange}
									type="password"
									placeholder="******"
									value={passwordInput}
								/>
								<div onClick={handleFirstNext}>Next</div>
							</div>
						</CSSTransition>
					</SwitchTransition>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
