import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focused) => {
        this.setState({
            calendarFocused: focused
        })
    };
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange = { (e) => {
                    this.props.dispatch(setTextFilter(e.target.value))           //dispatch method is already available inside props of react components.
                } } />
        
                <select value={this.props.filters.sortBy} onChange = { (e) => {
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }else{
                        this.props.dispatch(sortByAmount());
                    }
                } } >
                    <option value="date" >Date</option>
                    <option value="amount" >Amount</option>
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}       
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = { ()=> false}
                />

            </div>
        )
    }
}

// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" value={props.filters.text} onChange = { (e) => {
//             props.dispatch(setTextFilter(e.target.value))           //dispatch method is already available inside props of react components.
//         } } />

//         <select value={props.filters.sortBy} onChange = { (e) => {
//             if(e.target.value === 'date'){
//                 props.dispatch(sortByDate());
//             }else{
//                 props.dispatch(sortByAmount());
//             }
//         } } >
//             <option value="date" >Date</option>
//             <option value="amount" >Amount</option>
//         </select>

//     </div>
// )

const mapStateToProps = (state) => {
    return {        //this obj used as props to the component mentioned in the sec arg. of connect
        filters: state.filters,
    }
}

export default connect (mapStateToProps)(ExpenseListFilters);