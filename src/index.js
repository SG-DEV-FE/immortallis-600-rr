import React from 'react';
import { createRoot } from 'react-dom/client';
import './main/index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ReactGA from 'react-ga4';

const trackingId = 'UA-141751502-1';
ReactGA.initialize(trackingId);
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname + window.location.search,
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
