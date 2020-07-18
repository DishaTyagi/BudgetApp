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
        error: '',
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
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){      //string match method to match regex with a string.
            this.setState( { amount } );
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){      //if created is empty i.e the user simply deletes the date, don't change the state then.
            this.setState(() => (
                {
                    createdAt
                }
            ))    
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => (
            {
                calendarFocused: focused,
            }
        ))
    }
    onSubmit = (e) => {     
        e.preventDefault();     //prevents from full page refreshing.
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({
                error: 'Please provide description and amount'
            }))
        }else{
            this.setState( () => ({
                error: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount , 10),      //converting text amount to float(base 10)
                createdAt: this.state.createdAt.valueOf(),       //created is a moment obj. Here we converted it to time stamp.
                note: this.state.note
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <h3>{this.state.error}</h3>}

                <form onSubmit={this.onSubmit} >
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