import App from './App'
import  { shallow, mount } from 'enzyme';
import { findByTestAttr } from './utils/__test__/test-utils'
import React, { useReducer} from 'react'
import {initialState} from './store/reducers/weatherReducer'


const setup = (initialState) => {

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { initialState },
      jest.fn()
    ]);

  React.useReducer = mockUseReducer;
  return shallow(<App />);
}

test('App renders without error', () => {
  const wrapper = setup(initialState);
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
