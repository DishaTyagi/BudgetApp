import { createStore } from 'redux';

const store = createStore((state = { count : 2 }, action ) => {     //default state and its value count : 0 specified within.

    switch (action.type){
        case 'INCREMENT' : 
            return {        //this is the state object with credentials to be modified.
                count: state.count + 1
            };
        case 'DECREMENT' :
            return{
                count: state.count - 1
            }
        case 'RESET':
            return{
                count : 0
            }
        default: return state;
    }
    
});

console.log(store.getState());

//increment, decrement, reset -> using Actions(it is an object that is sent to the store)
store.dispatch({        //goes to the store to compute new values of states.
    type: 'INCREMENT',

});
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT',
});
console.log(store.getState());

store.dispatch({
    type: 'RESET',
})
console.log(store.getState());
