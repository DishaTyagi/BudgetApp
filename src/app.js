import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import ExpenseList from './components/ExpenseList';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();     //here, configureStore is called. It returns store which is indeed stored in a varible.

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses);
// })

store.dispatch(addExpense( { description: 'Water bill', amount: 1000 , createdAt: 100 } ));
store.dispatch(addExpense( { description : 'Gas bill',amount: 6000 , createdAt: 250 } ));
store.dispatch(addExpense( { description : 'Electricity bill',amount: 2000 , createdAt: 5000 } ));

const jsx = (
    <Provider store = {store}>          
        <AppRouter />
    </Provider>   
)

ReactDOM.render( jsx , document.getElementById('appDiv'));