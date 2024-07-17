import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

//for disptaching actions
const  counterSlice = createSlice({ //one slice for counter and showCounter , we preparing a slice of our global state, when we have different pieces of state whicha re not
    // directly related: authentication status and counter status we can create different slices

    name:'counter', //every slice needs a name and identifier of that piece of state
    initialState: initialCounterState, // can be an object... or just initialState because js is smartt:))
    reducers: { //object(map) of all reducers that this slice needs... we can add methods
        // every method will automatically receive the latest state,
        // these methods will automatically be called for u depending on which action was triggered
        increment(state) {
            state.counter++; //ovde e dozvoleno da se mutate the state
            //redux using package Imgur which will detect code and which will automatically clone the existing state, create a new state object, keep all the state
            //which we are not editing and overriding the state which we are editing in an immutable way
        }, 
        decrement(state) {
            state.counter--;
        }, 
        increase(state,action) {
          state.counter = state.counter + action.payload; //payload- name by redux automatically that hold extra data
        }, //here we need payload(extra data), if we need some data that is attached to action
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }

    }
});

// export const INCREMENT = 'increment'
// export const DECREMENT = 'increment'





// const counterReducer = ( state = initialState, action)=>{

//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,//even tho we don't care but we need to set because we're returning the overall state object i redux ne gi merge changes to the exisiting state tuku replace
//         };
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter, //invert the value
//             counter: state.counter
//         }
//     }
//     return state;
// }

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
