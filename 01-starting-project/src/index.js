import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/index.js'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>); //to provides our Redux store, now our componennts 
//in this App any other child components can tap into that store, get data out of the store, set up a subscription to that data and dispatch actions
//to provide our redux store, to the top of component ttree wherre we render this root compoentnt