import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import './index.css';
import App from './App';

// Fragment doesn't render in html
ReactDOM.render(
	<React.StrictMode>
    	<Fragment><App /></Fragment>
  	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();