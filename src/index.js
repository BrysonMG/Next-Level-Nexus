import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Assembly } from './Assembly'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Assembly />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);