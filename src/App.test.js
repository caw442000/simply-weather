import App from './App'
import  { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './utils/__test__'
import React from 'react'
import { initialState as state } from './state/reducers/weatherReducer'


const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
  return wrapper;
};

describe('App Component', () => {

  let wrapper;
  beforeEach(() => {
      const initialState = {
        weather: state
      }
      wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'appComponent');
      expect(component.length).toBe(1);
  });

});