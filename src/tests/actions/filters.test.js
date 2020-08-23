import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

//set text filter
test('set text filter action object', () => {
    const text = 'water';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        // text: text
        text    //es6 shorthand.
    });
});
test('set default text filter action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

//set start date
test('set start date action object', () => {
    expect(setStartDate(moment(100))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(100)
    });
});

//setEndDate
test('set end date action object', () => {
    expect(setEndDate(moment(200))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(200)
    });
});

//sortByamount
test('sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT',
    });
});

//sort by date
test('sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE',
    });
});