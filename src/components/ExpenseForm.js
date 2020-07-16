import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';   //css for dates.

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        description : '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => (
            {
                description,                
            }
        ))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({
            note
        }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){      //string match method to match regex with a string.
            this.setState( { amount } );
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => (
            {
                createdAt
            }
        ))
    }
    onFocusChange = ({focused}) => {
        this.setState(
            {
                calendarFocused: focused,
            }
        )
    }
    render(){
        return (
            <div>
                <form>
                    <label>Description</label>
                    <input type = "text" 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                        autoFocus={true} 
                    />
                    <br />

                    <label>Amount</label>    
                    <input 
                        type="text" 
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}    
                    />
                    <br />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = { () => false }        //lets us select the dates in the past.
                    />
                    <br />
                    <label>Note</label>
                    <textarea 
                        value={this.state.note} 
                        onChange = {this.onNoteChange}
                    >
                    </textarea>

                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}

//amt is taken as text to enforce decimal numbers with 2 significant figures.