import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();     //here, configureStore is called. It returns store which is indeed stored in a varible.

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

store.dispatch(addExpense( { description: 'Water bill', createdAt: 100 } ));
store.dispatch(addExpense( { description : 'Gas bill', createdAt: 250 } ));
store.dispatch(sortByDate());
store.dispatch(setTextFilter('gas'));

ReactDOM.render(<AppRouter />, document.getElementById('appDiv'));