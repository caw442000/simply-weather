// import App from "./GoogleSearch";
// import { shallow, mount } from "enzyme";
// import { findByTestAtrr, testStore } from "../../utils/__test__";
// import React from "react";
// import { initialState as state } from "../../state/reducers/weatherReducer";
// import GoogleSearch from "./GoogleSearch";
// import { Provider } from "react-redux";

// const setUp = (initialState = {}) => {
//   const store = testStore(state);
//   const wrapper = mount(
//     <Provider store={store}>
//       <GoogleSearch  />
//     </Provider>
//   );
//   return wrapper;
// };

// describe("Google Search Component", () => {
//   let wrapper;
//   beforeEach(() => {
//     const initialState = {
//       weather: state,
//     };
//     wrapper = setUp(initialState);
//   });

//   it("Should render without errors", () => {
//     const component = findByTestAtrr(wrapper, "searchComponent");
//     expect(component.length).toBe(1);
//   });
// });

// import React from 'react'
// import { createStore } from "redux";
// import { Provider } from 'react-redux'
// import {render, fireEvent, cleanup } from '@testing-library/react'
// import "@testing-library/jest-dom/extend-expect"
// import GoogleSearch from './GoogleSearch'
// import { weatherReducer as reducer, initialState } from '../../state/reducers/weatherReducer'

// afterEach(cleanup);

// // const startingState = { count: 0}
// // function reducer(state = startingState, action) {
// //   switch(action.type) {
// //     default: 
// //     return  state;
// //   }
// // }

// const renderWithRedux = (
//   component,
//   { initialState, store = createStore(reducer, initialState) } = {}
// ) => {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   }
// }


// it( "renders with redux", ()=> {
//   const  {getByTestId } = renderWithRedux(<GoogleSearch/>)
// })


// import React from 'react';
// import {Provider} from 'react-redux'
// import { mount, shallow } from 'enzyme'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk';
// import GoogleSearch from './GoogleSearch';

// const mockStore = configureMockStore([thunk]);

// describe('GoogleSearch', () => {
//   it('should render a startup component if startup is not complete', () => {
//     const store = mockStore({
//       startup: { complete: false }
//     });
//     const wrapper = mount(
//       <Provider store={store}>
//         <GoogleSearch />
//       </Provider>
//     )
//     // expect(wrapper.find('Startup').length).toEqual(1)
//   })
// })

// import React from 'react';
// // Replace this with the appropriate location of your component
// import GoogleSearch from './GoogleSearch';
// // Replace this with the appropriate location of your testing utility
// import renderConnected from '../../utils/__test__/test-utils';

// describe('<GoogleSearch />', () => {
//   let wrapper, getByText;
//   // const initialState = {
//   //   // ... Add your initial testing state here
//   // };

//   beforeEach(() => {
//     const utils = renderConnected(<GoogleSearch />, { });
//     wrapper = utils.container;
//     getByText = utils.getByText;
//   });

//   it('renders the component', () => {
//     // expect(wrapper.querySelector('.some-component')).toBeInTheDocument();
//   });
// });


// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import ConnectedApp, { App } from '../App';

// describe('the App container', () => {
//   ...
//   it('should fetch tasks on mount', () => {
//     const middlewares = [thunk];
//     const initialState = {
//       tasks: {
//         tasks: [],
//         isLoading: false,
//         error: null,
//         searchTerm: '',
//       },
//     };
//     const mockStore = configureMockStore(middlewares)(initialState);
//     const wrapper = mount(<Provider store={mockStore}><ConnectedApp
//  /></Provider>);
//     const expectedAction = { type: 'FETCH_TASKS_STARTED' };

//     expect(mockStore.getActions()[0]).toEqual(expectedAction);
//   });
// });


import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../utils/__test__/test-utils.js'
import GoogleSearch from '../../components/search/GoogleSearch'
import { weatherReducer as reducer, initialState } from '../../state/reducers/weatherReducer'


it('Renders the connected app with initialState', () => {
  render(<GoogleSearch />, { initialState: initialState })

  // expect(screen.getByText(/redux user/i)).toBeInTheDocument()
})

// import React from 'react';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';

// import { cleanup, render } from '@testing-library/react';

// import GoogleSearch from './GoogleSearch';
// const mockStore = configureMockStore();

// afterEach(cleanup);
// test('Match snapshot', () => {
//   const initialState = {
//     exportedStudyGroups: {
//       loaded: '',
//     },
//     trainingTasks: {
//       target: [],
//     },
//   };
//   const store = mockStore(initialState);
//   const { asFragment } = render(
//     <Provider store={store}>
//       <GoogleSearch />
//     </Provider>,
//   );
//   // expect(asFragment()).toMatchSnapshot();
// });
