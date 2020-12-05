
// test-utils.js
// import React from 'react';
// import { render } from '@testing-library/react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// // Replace this with the appropriate imports for your project
// import { weatherReducer as reducer, initialState as reducerInitialState } from '../../state/reducers/weatherReducer';

// const renderConnected = (
//   ui, {
//     initialState = reducerInitialState,
//     store = createStore(reducer, initialState),
//     ...renderOptions
//   } = {}
// ) => {
//   const Wrapper = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
//   );
//   return render(ui, { wrapper: Wrapper, ...renderOptions});
// };


// export default renderConnected;

// import React from 'react'
// import { render as rtlRender } from '@testing-library/react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// // Import your own reducer
// import { weatherReducer as reducer } from '../../state/reducers/weatherReducer';

// function render(
//   ui,
//   {
//     initialState,
//     store = createStore(reducer, initialState),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }

// // re-export everything
// export * from '@testing-library/react'
// // override render method
// export { render }

import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
