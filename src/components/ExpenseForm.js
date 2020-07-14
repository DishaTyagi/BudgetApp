import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description = '',
    }
    render(){
        return (
            <div>
                <form>
                    <label>Description</label>
                    <input type = "text" value={this.props.description} autoFocus={true} />
                    <br />
                    <label>Amount</label>    
                    <input type="number" />
                    <br />
                    <label>Note</label>
                    <textarea></textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}