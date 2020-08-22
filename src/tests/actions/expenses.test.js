import moment from 'moment';
import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

//remove expense
test('remove expense action object', () => {
    const action = removeExpense( { id: '123abc'} );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

//edit expense
test('edit expense action object', () => {
    const action = editExpense( '123abc', {note: 'the edited note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'the edited note'
        }
    });
});

//add expense
test('add expense action object', () => {
    const expenseData = {
        description: 'milk',
        note: 'tasty milk',
        amount: 500,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String) ,      //id value changes for every expense. Hence use expense.any() that checks only the type which here is string.
            ...expenseData
        }
    });
});

//add expense with nothing passed in to use default value.
test('add expense with default value', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});