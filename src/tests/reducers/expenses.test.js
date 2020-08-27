import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

test('set default state of expense reducer', () => {
    const state = expensesReducer(undefined , { type: '@@INIT' });
    expect(state).toEqual([]);
});

const expenses = [{
    id: '1',
    description: 'copy',
    note: '',
    amount: 300,
    createdAt: moment(0).subtract(4, 'days').valueOf()    //moment 0 if jan 1 1970. To go 4 days back, subtract it by 4 days. Since we want the createdAt val to be int, use valueOf()
} , {
    id: '2',
    description: 'pen',
    note: '',
    amount: 200,
    createdAt: moment(0).valueOf()    //or 0  
}, {
    id: '3',
    description: 'door',
    note: '',
    amount: 100,
    createdAt: moment(0).add(4, 'days').valueOf()       //4 days after Jan 1, 1970.
}, {
    id: '4',
    description: 'mouse',
    note: '',
    amount: 900,
    createdAt: moment(0).add(10, 'days').valueOf(),
}];

//remove expense
test('remove expense reducer', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id : expenses[1].id,
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [ expenses[0], expenses[2], expenses[3] ] ); //here sortBy date has not to be taken into account since the removeExpense reducer just removes the expense and returns the array as it is without sorting it by any means.

});

test('should not remove expenses if not found', () => {
    //if id does not match with the id of any expense in the array
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'kuch bhi'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);        //coz no expense will be removed.
});

//add expense
test('testing add expense reducer', () => {
    const expense = {
        id: '5',
        description : 'rajni',
        note: '',
        amount: 1,
        createdAt: moment(0).add(20, 'days').valueOf(),
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);      //YUMM.
});

//edit expense
test('edit expense reducer', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount : 500
        }
    };
    const state = expensesReducer(expenses, action);    
    expect(state[0].amount).toBe(500);      //since state is the array of expenses, state[0] represents the first expense that the reducer function returns.
});

//should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'kuch bhi',
        updates: {
            note: 'this note belongs to kuchbhi expense'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);    //since no id matches, they both should be equal.
});