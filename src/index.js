import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Provider and createStore enables connecting state to the redux app
// Provider is react-redux connects all the states and makes them accessable from all the areas
import { Provider } from 'react-redux';
// createStore combines all states into 1 file, and we can acess the store from any component
import { createStore } from 'redux';
import Header from './components/Header';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import Intro from './utils/Intro';

// Save Data in Local Storage
function saveToLocalStorage(state) {
	try {
		const serialzedState = JSON.stringify(state);
		localStorage.setItem('state', serialzedState);
	} catch (e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serialzedState = localStorage.getItem('state');
		if (serialzedState === null) return undefined;
		return JSON.parse(serialzedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

const persistedState = loadFromLocalStorage();

// rootReducer is addition of all the reducers we have into one file
// set up to have Dev Tool for redux
const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
	// this is how you make all the states from the tore accesible in all components in the app
	// cause its now in the main 'component' and its easy to just pull data from here down
	<Provider store={store}>
		{/* If I wish to change the font color at some point, just set to false */}
		<Intro />
		<Header primary={true} style={{ zIndex: '-1', position: 'relative' }} />
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();

// deploy PWA
// https://www.youtube.com/watch?v=F8s4Ng-re0E&ab_channel=EsterlingAccime

// deploy with react router
// https://www.youtube.com/watch?v=1wDzEjXbblM&ab_channel=EsterlingAccime
