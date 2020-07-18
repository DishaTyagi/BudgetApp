import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');        //redirects to / i.e. home page.
            }}
        />
    </div>
);

export default connect()(AddExpensePage);    //connected to redux-store.
//connect allows the use of props.dispatch().