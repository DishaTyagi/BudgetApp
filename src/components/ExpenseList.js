import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList =  (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map( expense => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        } )}
    </div>
)

const mapStateToProps = (state) => {       //this fn tells what info from the store the component needs to access. state is the state of store.
    return {        //this obj. can be accessed as props in the components mentioned in the second argument.
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect( mapStateToProps )(ExpenseList)

// export default ConnectedExpenseList;