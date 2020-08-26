import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Provider and createStore enables connecting state to the redux app

// Provider is react-redux connects all the states and makes them accessable from all the areas 
import { Provider } from 'react-redux';
// createStore combines all states into 1 file, and we can acess the store from any component 
import { createStore } from 'redux';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

// rootReducer is addition of all the reducers we have into one file
 const store = createStore(rootReducer)  
 


ReactDOM.render(

  // this is how you make all the states from the tore accesible in all components in the app
  // cause its now in the main 'component' and its easy to just pull data from here down 
<Provider store= { store }>

    <App />
  </Provider>,
  document.getElementById('root')
);