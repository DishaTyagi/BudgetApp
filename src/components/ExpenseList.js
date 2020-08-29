import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList =  (props) => (    //unconnected ExpenseList(diff from the connected one that is exported below)
    <div>
        {
            props.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map( expense => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                } )
            )
        }
        
    </div>
);
const mapStateToProps = (state) => {       //this fn tells what info from the store the component needs to access. state is the state of store.
    return {        //this obj. can be accessed as props in the components mentioned in the second argument.
        expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect( mapStateToProps )(ExpenseList);
// export default ConnectedExpenseList;