import { createstore, combineReducers} from 'redux';

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