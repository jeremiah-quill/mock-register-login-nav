import React, { useContext, useState } from 'react';
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
	const [ currentFormStep, setCurrentFormStep ] = useState('step1');

	const handleSubmit = (e) => {
		console.log('submitted');
		resetName();
		resetEmail();
		resetPassword();
		e.preventDefault();
	};

	const { dark, light } = theme;
	return (
		// <div className="RegisterFormContainer">
		<div className="register-form-container">
			<CSSTransition in={currentFormStep === 'step2'} classNames="slide-previous" timeout={500}>
				<div className="form-button-previous" onClick={() => setCurrentFormStep('step1')}>
					Action
				</div>
			</CSSTransition>
			<div style={isDarkMode ? dark : light} className="registerForm">
				<h3>Register</h3>

				<form onSubmit={handleSubmit}>
					<CSSTransition in={currentFormStep === 'step1'} classNames="slide1" unmountOnExit timeout={500}>
						<div className="formStep">
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
						</div>
					</CSSTransition>

					<CSSTransition in={currentFormStep === 'step2'} classNames="slide2" unmountOnExit timeout={500}>
						<div className="formStep">
							<div>STEP 2</div>

							<button>Submit</button>
						</div>
					</CSSTransition>
				</form>
			</div>
			<CSSTransition in={currentFormStep === 'step1'} classNames="slide-next" timeout={500}>
				<div className="form-button-next" onClick={() => setCurrentFormStep('step2')}>
					Action
				</div>
			</CSSTransition>
		</div>
		// </div>
	);
};

export default RegisterForm;
