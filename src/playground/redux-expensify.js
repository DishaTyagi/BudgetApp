import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';        //if more than 1 import from same package, use named export rather than default.

//Action Generators for expenses.
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
const removeExpense = ( id = '' ) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

//EDIT_EXPENSE
const editExpense = (id , updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

//SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => (
    {
        type: 'SET_TEXT',
        text
    }
)

//SORT_BY_DATE
const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
);

//SORT_BY_AMOUNT
const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'
    }
);

//SET_START_DATE
const setStartDate = ( startDate ) => (
    {
        type:'SET_START_DATE',
        startDate
    }
)

//SET_END_DATE
const setEndDate = ( endDate ) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
)

//2 reducers. 1 -> expenses array of objects and 2 -> filters.
//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState , action) => {
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

//Filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//show expenses based on the filters
const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate} ) => {

    return expenses.filter( (expense) => {      //filter is the array function here.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;              //textMatch is to check if the description of expense has the word that contains the text passed by the user.
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;

        return textMatch && startDateMatch && endDateMatch;     //if both are true, then the expense is included in the new array.
    }).sort( ( a, b ) => {            //sort is chained coz expenses have to be sorted based on date or amount.
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;     //if b expense has to be on the top, toss 1, else -1.
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1 ;
        }
    }) ;
    
}

//store
const store = createStore(
    combineReducers({       //takes obj as an argument 
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense( { description : 'rent', amount : 300, createdAt: 100 } ));
const expenseTwo = store.dispatch(addExpense( { description : 'coffee', amount : 200, createdAt: 200 } ));
store.dispatch( addExpense( { description : 'tomato', amount : 100, createdAt: 300 } ) )

// store.dispatch( removeExpense( expenseOne.expense.id ) ); 
// store.dispatch( editExpense( expenseTwo.expense.id , { amount: 500, note: 'expensive one huh' } ));     //1st arg is the id of the expense to be updated and second is the object that contains info about what has to be updated.

// store.dispatch(setTextFilter('ren'));
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());        //recent on the top
store.dispatch(sortByAmount());         //highest on the top

// store.dispatch(setStartDate(1500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

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