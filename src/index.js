import React from 'react';
import ReactDOM from 'react-dom';
import './main/index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = 'UA-141751502-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
