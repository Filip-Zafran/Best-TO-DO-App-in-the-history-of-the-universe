import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FooterContainer from '../containers/FooterContainer';
import weeee from '../utils/weeeeSound.js';
import { connect } from 'react-redux';

// !!
// components added to the containers are going to be functional, which interacts with the states
// components added to the components folder will be presentational

const App = (props) => {
	if (props.soundON) {
		setTimeout(function Play() {
			weeee.play();
		}, 800);
	}

	return (
		<div>
			<AddTodo />
			<VisibleTodoList />
			<FooterContainer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	soundON: state.sound
});

export default connect(mapStateToProps)(App);
