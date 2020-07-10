import uuid from 'uuid';


//Action Generators for expenses.
//ADD_EXPENSE
export const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => (      //toss export at the beginning for named exports.
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
export const removeExpense = ( id = '' ) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

//EDIT_EXPENSE
export const editExpense = (id , updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

