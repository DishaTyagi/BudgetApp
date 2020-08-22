import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

//store
export default () => {
    const store = createStore(
        combineReducers({       //takes obj as an argument 
            expenses: expensesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;   //so that the file that imports the store can access the store coz it has been returned here.
}

