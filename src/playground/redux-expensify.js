import { createStore, combineReducers} from 'redux';

//actions to be performed -> Action Generators.
//ADD_EXPENSE
//REMOVE_EXPENSE
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

console.log(store.getState());

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