
// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
 import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


import store from "./JS/store"
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';


ReactDOM.render(

  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);