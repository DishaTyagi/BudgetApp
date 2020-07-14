import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange = { (e) => {
            props.dispatch(setTextFilter(e.target.value))           //dispatch method is already available inside props of react components.
        } } />

        <select value={props.filters.sortBy} onChange = { (e) => {
            if(e.target.value === 'date'){
                props.dispatch(sortByDate());
            }else{
                props.dispatch(sortByAmount());
            }
        } } >
            <option value="date" >Date</option>
            <option value="amount" >Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {        //this obj used as props to the component mentioned in the sec arg. of connect
        filters: state.filters,
    }
}

export default connect (mapStateToProps)(ExpenseListFilters);