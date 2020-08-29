import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';

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

test('should render expenseList with expenses' , () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});