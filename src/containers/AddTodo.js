import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, resetShowAnimation } from '../actions';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Destructuring of the object
const AddTodo = ({ dispatch, soundON }) => {
	// Destructuring of the array
	const [ startDate, setStartDate ] = useState();

	// We are not using this anymore
	const [ showFistBump, setShowFistBump ] = useState(false);
	// useState(false); FALSE is the initial state
	// I want to change it with 'setShowFistBump'
	// showFistBump is the name of the state

	// showFistBump is changing to setShowFistBump after the inital state

	const handleChange = (date) => {
		setStartDate(date);
	};

	/* 
			TO DO:: 
			 ? remove local storage / make BIN
			 ? useEffects to renteder surfer only once
		 */

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();

					// Validation
					if (e.currentTarget[0].value.length < 1) {
						alert('Write me what you want to do');
						return;
					}

					// we are checking if the variable value is non empty (is present)
					if (!startDate) {
						alert('Please choose a Deadline');
						return;
					}

					if (soundON) {
						monkeySound.play();
					}

					dispatch(
						addTodo({
							text: e.currentTarget[0].value,
							date: startDate.getTime()
						})
					);

					setTimeout(function() {
						dispatch(resetShowAnimation());
					}, 100);

					// clear input after submit
					e.currentTarget[0].value = '';
					setStartDate(null);
				}}
			>
				<div className="inputContainer">
					<input id="inputCSS" placeholder="Wat I gotta do?" type="text" />

					<DatePicker
						className="DatePicker"
						placeholderText=" &#128197; 	&nbsp;Pick a deadline date"
						selected={startDate}
						onChange={handleChange}
					/>
				</div>

				<button id="addTodo" type="submit">
					{' '}
					Add Todo
				</button>
			</form>

			<GorillaSurf />
		</div>
	);
};

const mapStateToProps = (state) => ({
	soundON: state.sound
});

// when one uses the function connect, it returns another function
export default connect(mapStateToProps)(AddTodo);
