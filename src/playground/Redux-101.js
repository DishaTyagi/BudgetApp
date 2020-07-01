import { createStore } from 'redux';

const store = createStore((state = { count : 0 }, action ) => {     //default state and its value count : 0 specified within.
//the 2nd argument action contains the dispatched object from the store to modify the state values accordingly.
    switch (action.type){
        case 'INCREMENT' : 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

            return {        //this is the state object with credentials to be modified.
                count: state.count + incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return{
                count: state.count - decrementBy
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
    
});

const unsubscribe = store.subscribe(() => {     //return value of subscribe() is called to unsubscribe from the subscriptions.
    console.log(store.getState());
})

store.dispatch({        //goes to the store to compute new values of states.
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({        //goes to the store to compute new values of states.
    type: 'INCREMENT',
});
// unsubscribe();

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});

store.dispatch({
    type: 'DECREMENT',
})

store.dispatch({
    type: 'RESET',
})

store.dispatch({
    type: 'SET',
    count: 101
})