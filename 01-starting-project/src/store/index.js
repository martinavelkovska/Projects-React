//file in which i will put  the Redux-logic here
//create a store, reducer,  and not subscrive we wanna create the store and reducer
import { createStore } from 'redux';
import {configureStore } from '@reduxjs/toolkit';  // more powerful than createReducer
import counterReducer from './counter';
import authReducer from './auth';
// const redux = require('redux');



// const store = createStore(counterReducer); //store the store in the store constant -- this create our redux store

//configureStore like createStore creates a store but it makes merging multiple reducer into one easier
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}  //wants one main reducer function whis is resposible for global state, global main reducer, map od reducers {}
});

//da gi dobieme site actions identifiers koristeme counterSlice.actions.key name
//so toa ne pristapuvame do reducr methods da gi najdeme tuku imame metodi actomatski kreirani od Redux koi sto //methods on the actions objects which we can call will create action objects for us
//ovie objketi imaat veke type property so unique identifier per action



//conect the react app to this redux store so that components of that app can dispatch and listen
export default store;