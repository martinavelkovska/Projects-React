import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch,connect } from 'react-redux';  //hook by React Redux
import { INCREMENT } from '../store/index';
import { DECREMENT } from '../store/index';
import {counterActions} from '../store/counter';


const Counter = () => {

  const dispatch = useDispatch(); // we don't pass any argument
 const counter= useSelector(state => state.counter.counter); //get access to the data managed in our store, we need to pass a function to useSelector, funkcija sto odreduva which piece of data we wanna extract from our store
  //this function will be executed for us by React Redux, it will then pass the Redux state so the manage the data into this function when it executrs this code retrieve part of the state i need in this component
  //when we use useSelector , react Redux automatically set up a subscription to the Redux store for this component
  // the component will be updated and will receive the latest counter automatically whenever the data changes in Redux store
  //changes to the Redux store will cause this component to be re-executed

  const show= useSelector(state => state.counter.showCounter); //we can use useSelector multiple times to retrieve(porvrati) different pieces of data from the state


  const incrementHandler = () => {
    // before : dispatch({type: 'increment' })
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // before: dispatch({type: 'increase', amount: 5 })  //amount treba da bide so isto ime vo index.js
    dispatch(counterActions.increase(5)); // moze i objekt da se prate.. redux toolkit : {type:SOME_UNIQUE_IDENTIFIER, paylod: 5}
  };

  const decrementHandler = () => {
     // before: dispatch({type: 'decrement' })
     dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //before : dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button  onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){}


//   render(){

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button  onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }

// }

export default Counter;

// const mapStateToProps = state => {
//   return {
//     counter: state.counter //from redux state and bind that value to the counter prop
//   };
// }  //function sto go mapira Redux state to props, koi ke bidat received in this Counter  component then, 
// //go prima redux state i potoa vrakja objekt kade keys ke bidat dostapni kako props vo komponentata

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch( {type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }; //ekvivalentno so useDispatch ... to store dispatch functions in props, map dispatch to props will be executed by Redux, and we also return an object, where the keys are prop names,
// //and value is another function which we call dispatch and then set up our action

//  export default connect(mapStateToProps,mapDispatchToProps)(Counter); // we call connect and when connect is executed, will return a new function as a value which then we execute again..
// //. we execute the connect function, it returns a new function and we execute this returned new function aswell, to this returned function we pass Counter


// //connect wants arguments - functions, we just point them they will be executed by react Redux, connect will  set up and manage a subscription for us