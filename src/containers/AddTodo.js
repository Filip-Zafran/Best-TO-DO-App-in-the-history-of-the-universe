import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, resetShowAnimation } from '../actions';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
import GorillaSurfOut from '../utils/GorillaSurfOut';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Destructuring of the object
const AddTodo = ({ dispatch, soundON }) => {
	// Destructuring of the array
	const [ startDate, setStartDate ] = useState();
	const [ shouldGorillaSurfIn, setShouldGorillaSurfIn ] = useState(true);
	const [ shouldGorillaSurfOut, setShouldGorillaSurfOut ] = useState(false);
	const [ showFistBump, setShowFistBump ] = useState(false);
	// useState(false); FALSE is the initial state
	// I want to change it with 'setShowFistBump'
	// showFistBump is the name of the state
	// showFistBump is changing to setShowFistBump after the inital state

	const handleChange = (date) => {
		setStartDate(date);
	};

	useEffect(() => {
		setShowFistBump(false);
	}, []);

	useEffect(() => {
		setShouldGorillaSurfIn(false);
	}, []);

	return (
		<div>
			{/* {shouldGorillaSurfIn && <GorillaSurf />} */}
			<GorillaSurf
				onClick={() => {
					console.log('gorilla clicked');
					setShouldGorillaSurfOut(true);
				}}
			/>
			{shouldGorillaSurfOut && <GorillaSurfOut />}
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
				<div className="input-container">
					<input id="input-main" placeholder="Wat I gotta do?" type="text" />

					<DatePicker
						className="DatePicker"
						placeholderText=" &#128197; 	&nbsp;Pick a deadline date"
						selected={startDate}
						onChange={handleChange}
					/>
				</div>

				<button id="add-todo" type="submit">
					Add Todo
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	soundON: state.sound
});

// when one uses the function connect, it returns another function
export default connect(mapStateToProps)(AddTodo);
