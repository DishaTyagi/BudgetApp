import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import filters from '../../reducers/filters';

test('default filter reducer value setup', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });        //filterReducer is returning an object. Hence this object is stored in state.
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

//sort by amount filter
test('sort by amount filter reducer', () => {    
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

//sort by date filter
test('sort by date filter reducer', () => {

    //in sortbydate reducer, the default value of sortby originally is date, so to check whether 
    //redux dispatches the correct information, we'll change it to amount
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,     //undefined since we really don't care about dates at this point of time
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

//set text filter
test('set text filter reducer', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT', text:'electricity'});
    expect(state.text).toBe('electricity');
});

//set start date
test('set start date filter reducer', () => {
    // console.log(moment());

    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));      //here toEqual is used coz startDate is a moment instance that is object and to compare objects, we use toEquals.
});

//start end date
test('set end date filters reducer', () => {
    const endDate = moment().add(4,'days');
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});