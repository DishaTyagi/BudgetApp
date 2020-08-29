import ExpenseListItem from '../../components/ExpenseListItem';
import {shallow} from 'enzyme';
import moment from 'moment';
import React from 'react';
import expenses from '../fixtures/expenses'

test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0] }/>);
    expect(wrapper).toMatchSnapshot();
});