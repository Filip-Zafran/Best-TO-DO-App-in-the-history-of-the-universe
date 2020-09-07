import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MainApp';
// Provider and createStore enables connecting state to the redux app

// Provider is react-redux connects all the states and makes them accessable from all the areas 
import { Provider } from 'react-redux';
// createStore combines all states into 1 file, and we can acess the store from any component 
import { createStore } from 'redux';
import Stylesheet from './components/Stylesheet.js'
import rootReducer from './reducers/index_red.js';
import * as serviceWorker from './serviceWorker';
import MonkeyPic from './utils/MonkeyPicture.js'
import Gorilla from './utils/GorillaSurf.js'
import FistBump from './utils/Fist.js'

// rootReducer is addition of all the reducers we have into one file
const store = createStore(rootReducer)  
 


ReactDOM.render(


  // this is how you make all the states from the tore accesible in all components in the app
  // cause its now in the main 'component' and its easy to just pull data from here down 
  <Provider store={store}>
    
          <FistBump />  
          <MonkeyPic />

  {/* If I wish to change the font color at some point, just set to false */}
    <Stylesheet primary={true} />
      <App />
  
    <Gorilla />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

