import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode basename={process.env.PUBLIC_URL}>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
