import App from './App'
import  { shallow, mount } from 'enzyme';
import { findByTestAttr } from './utils/__test__'
import React, { useReducer} from 'react'
import {initialState} from './state/reducers/weatherReducer'


/**
 * Setup function for app component.
 * @param {string} secretWord - desired secretWord state value for test
 * @returns {ReactWrapper}
 */
const setup = (initialState) => {

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { initialState },
      jest.fn()
    ]);

  React.useReducer = mockUseReducer;

  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return shallow(<App />);
}

test('App renders without error', () => {
  const wrapper = setup(initialState);
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

//   it('Should render without errors', () => {
//       const component = findByTestAtrr(wrapper, 'appComponent');
//       expect(component.length).toBe(1);
//   });

// });