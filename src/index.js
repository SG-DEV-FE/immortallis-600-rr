import React from 'react';
import ReactDOM from 'react-dom';
import './main/index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
