import { createStore } from 'redux';

//Action generator for type 'INCREMENT'
const incrementCount = ( {incrementBy = 1} = {} ) => (        //default value 1. If no object is provided when incrementCount is called, then default is provided here i.e. empty object {}
    {           //action object being returned by action generator.
        type: 'INCREMENT',
        // incrementBy: incrementBy ,
        incrementBy,
    }
);

//Action generator for type 'DECREMENT'
const decrementCount = ( { decrementBy = 1 } = {} ) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

//for type 'SET'
const setCount = ( { count } ) => (
    {
        type: 'SET',
        count,
    }
)

//for 'RESET'
const resetCount = () => (
    {
        type: 'RESET'
    }
)


//reducers
const countReducer = (state = { count : 0 }, action ) => {     //default state and its value count : 0 specified within.

    switch (action.type){
        case 'INCREMENT' : 
            return {        //this is the state object with credentials to be modified.
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return{
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET':
            return{
                count : 0
            }
        default: return state;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {     //return value of subscribe() is called to unsubscribe from the subscriptions.
    console.log(store.getState());
})

store.dispatch(incrementCount( {incrementBy: 5} ));     //incrementBy passed to payload in incrementCount.

store.dispatch(incrementCount());
// unsubscribe();           //will not log out further state changes.

store.dispatch(decrementCount( { decrementBy: 3 } ));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount( { count: 101} ));