import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FooterContainer from '../containers/FooterContainer';
import weeee from '../utils/weeeeSound.js';

// !!
// components added to the containers are going to be functional, which interacts with the states
// components added to the components folder will be presentational

weeee.play();

const App = () => (
	<div className="appCSS">
		<AddTodo />
		<VisibleTodoList />
		<FooterContainer />
	</div>
);

export default App;
