
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

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import { weatherReducer as reducer } from '../../state/reducers/weatherReducer';

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }