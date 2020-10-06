import React, { useState, useEffect } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FooterContainer from '../containers/FooterContainer';
import IntroOut from '../utils/IntroOut';
import Intro from '../utils/Intro';

// !!
// components added to the containers are going to be functional, which interacts with the states
// components added to the components folder will be presentational

const App = () => {
	const [ shouldIntroRun, setShouldIntroRun ] = useState(true);
	const [ shouldIntroOutRun, setShouldIntroOutRun ] = useState(false);
	const ref = React.createRef();

	useEffect(() => {
		setShouldIntroRun(false);
	}, []);

	function hideIntro() {
		ref.current.className = 'hide';
	}

	const handleintroClick = (props) => {
		setShouldIntroOutRun(true);
		hideIntro();
	};

	return (
		<div>
			<Intro ref={ref} handleClick={handleintroClick} />

			{shouldIntroOutRun && <IntroOut />}

			<AddTodo />
			<VisibleTodoList />
			<FooterContainer />
		</div>
	);
};

export default App;
