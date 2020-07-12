import React from 'react';
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem =  ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <p>{description}</p>
        <p>{amount} - {createdAt} </p>
        <button onClick = { () => {
            dispatch(removeExpense(id));
        } } >Remove</button>
    </div>
)

export default connect()(ExpenseListItem);      //this makes dispatch available to the components mentioned here.