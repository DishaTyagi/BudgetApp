import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('render header component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);      //arg contains the jsx we're trying to render here.
    expect(renderer.getRenderOutput()).toMatchSnapshot();    //gives the output of the jsx we are rendering. here Header.
});