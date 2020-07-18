import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense , removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm 
                expense= {props.expense}
                onSubmit = {(expense) => {
                    props.dispatch( editExpense(props.expense.id , expense ));
                    props.history.push('/');
                }}
            />
            <button onClick = { () => {
                props.dispatch(removeExpense(props.expense.id));
                props.history.push('/');
                } } >Remove
            </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {             //props refers to the already present props in the expenses
//here we wanna check that the expenses present in the state has the same id as that of the props.match.params.id
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);