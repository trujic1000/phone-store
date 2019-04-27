import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { StateProvider } from './context/StateContext';
import { StateProvider } from './global-state/state';

ReactDOM.render(
  <StateProvider>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root')
);
