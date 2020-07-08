import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';        //if more than 1 import from same package, use named export rather than default.

//Action Generators.
//ADD_EXPENSE
const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => (
    {       //action object
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            //remaining 4 keys are user-defined.
            description,
            note,
            amount,
            createdAt
        }
    }
)

//REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)


//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//2 reducers. 1 -> expenses array of objects and 2 -> filters.
//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' :            
            return [...state, action.expense];       //spread operator(returns a new array)
        case 'REMOVE_EXPENSE' :
            return state.filter( ( {id} ) => id !== action.id)      //{id} of the individual state in filter across the state array of objects.
        default: 
            return state;
    }
};

//Filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

//store

const store = createStore(
    combineReducers({       //takes obj as an argument 
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense( { description : 'rent', amount : 100 } ));
const expenseTwo = store.dispatch(addExpense( { description : 'coffee', amount : 200 } ));

store.dispatch( removeExpense( { id: expenseOne.expense.id } ) ); 

const demoState = {
    expenses: [{    //array of objects
        id: 'oiuytr98765',
        description: 'january rent',
        note: 'final payment for that address',
        amount: 100,
        createdAt: 0
    }] ,
    
    filters: {
        text: 'rent',
        sortBy: 'amount' ,   //date or amount
        startDate: undefined,
        endDate: undefined,         //start and endDate to fetch data b/w a date range.
    }
}