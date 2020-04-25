// General packages
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


// Application specific imports
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';

// This is a logger function, middleware, from Redux
const logger = createLogger();

// Combine reducers
const rootReducer = combineReducers({ searchRobots, requestRobots });

// This is the example with one reducer, 
// usually you have a root reducer
// The reducer is the function that is executed after the event (action)
const store = createStore(
	rootReducer, // Or use a single reducer, such as searchRobots
	applyMiddleware(thunkMiddleware, logger)
);

// Fragment doesn't render in html
// Provider component passes the store down to all the children
// Thus, react/redux uses providers to give components access to the store
ReactDOM.render(
	<React.StrictMode>
    	
		<Provider store={store}>
			<Fragment>
				<App />
			</Fragment>
		</Provider>
		
  	</React.StrictMode>,
  	document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();

// See https://github.com/rusty-jnr/robofriends/ for a modern example using hooks