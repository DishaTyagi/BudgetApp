import { createStore } from 'redux';

const store = createStore((state = { count : 0 }) => {     //default state and its value count : 0 specified within.
                           // this state is the current state
    return state;                 
});

console.log(store.getState());