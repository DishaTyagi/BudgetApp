import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'copy',
    note: '',
    amount: 654,
    createdAt: moment(0).valueOf()    //or 0
} , {
    id: '2',
    description: 'pen',
    note: '',
    amount: 50,
    createdAt: moment(0).subtract(4, 'days').valueOf()    //moment 0 if jan 1 1970. To go 4 days back, subtract it by 4 days. Since we want the createdAt val to be int, use valueOf()
}, {
    id: '3',
    description: 'door',
    note: '',
    amount: 7896,
    createdAt: moment(0).add(4, 'days').valueOf()       //4 days after Jan 1, 1970.
}];


//filter by text val
test('filter by text value', () => {
    const filters = {
        text: 'o',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual( [expenses[2], expenses[0]] );
});

//filter by start date
test('filter by start Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),       //startDate and end date are moment instances whereas createdAT prop of expenses is an intenger hence we did valueOf()
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);     //since we use sort by date in fietrs here. So exchanging expense[0] and expense[2] positions test will result in an error

});

//filter by end date
test('filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(100)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

//sort by date
test('sort by date filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual( [expenses[2], expenses[0], expenses[1] ] );
});

//sort by amount
test('sort by amount filter', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual( [expenses[2], expenses[0], expenses[1] ] );
});