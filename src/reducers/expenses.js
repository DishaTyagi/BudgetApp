//Expenses reducer
const expensesReducerDefaultState = [];
export default ( state = expensesReducerDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' :            
            return [...state, action.expense];       //spread operator(returns a new array)
        case 'REMOVE_EXPENSE' :
            return state.filter( ( {id} ) => id !== action.id)      //{id} of the individual state in filter across the state array of objects.
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates      //action.updates is also an object so hgrab it and override the values of expense with action.updates
                    }
                }
                else{
                    return expense;
                }
            } )
        default: 
            return state;
    }
};

// export default expensesReducer;