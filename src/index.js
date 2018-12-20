import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home'
import * as serviceWorker from './serviceWorker';

//Import CSS files
import './css/buttons.css';
import './css/header.css';
import './css/home.css';
import './css/modals.css';
import './css/playlist.css';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
