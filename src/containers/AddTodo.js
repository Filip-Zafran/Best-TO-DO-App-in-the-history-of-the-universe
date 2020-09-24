import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import monkeySound from '../utils/monkeySound.js';
import GorillaSurf from '../utils/GorillaSurf.js';
import FistBump from '../utils/FistBump.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MonkeyPic from '../utils/MonkeyPicture.js';

const AddTodo = ({ dispatch, soundON }) => {
	const [ startDate, setStartDate ] = useState();
	const [ showFistBump, setShowFistBump ] = useState(false);

	const handleChange = (date) => {
		setStartDate(date);
	};

	return (
		<div>
			{/* 
			GENERALNO: 
			 - monkeypic rotate
			 - save state
			 - pomakni kalendar ljevo / DYNAMIC ?? kak se zove 
			 - napravi Aplikaciju unregister
	 */}

			<MonkeyPic rotate={showFistBump} />
			{/* 1. set state
2. on click change state 
			3. u reduceru promjeni properties */}
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

					setShowFistBump(true);
					setTimeout(() => {
						setShowFistBump(false);
					}, 1000);

					dispatch(
						addTodo({
							text: e.currentTarget[0].value,
							date: startDate
						})
					);

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
			{showFistBump && <FistBump />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	soundON: state.sound
});

// when one uses the function connect, it returns another function
export default connect(mapStateToProps)(AddTodo);
