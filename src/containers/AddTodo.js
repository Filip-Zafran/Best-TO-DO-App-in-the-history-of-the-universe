import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, resetShowAnimation } from '../actions';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import showAnimation from '../reducers/showAnimation';

const AddTodo = ({ dispatch, soundON }) => {
	const [ startDate, setStartDate ] = useState();
	const [ showFistBump, setShowFistBump ] = useState(false);

	const handleChange = (date) => {
		setStartDate(date);
	};

	/* 
			TO DO:: 
			 - make app responsive 
			 - make App for phone - unregister
			 		  /// explain showFistbump

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
