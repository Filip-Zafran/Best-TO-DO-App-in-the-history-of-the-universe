import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Provider and createStore enables connecting state to the redux app
// Provider is react-redux connects all the states and makes them accessable from all the areas
import { Provider } from 'react-redux';
// createStore combines all states into 1 file, and we can acess the store from any component
import { createStore } from 'redux';
import Stylesheet from './components/Stylesheet.js';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
// import { createCipher } from 'crypto';

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
		<Stylesheet primary={true} />
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// https://create-react-app.dev/docs/making-a-progressive-web-app/
