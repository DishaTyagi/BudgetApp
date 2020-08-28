import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('render header component correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('expensify');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);      //arg contains the jsx we're trying to render here.
    // expect(renderer.getRenderOutput()).toMatchSnapshot();    //gives the output of the jsx we are rendering. here Header.
});