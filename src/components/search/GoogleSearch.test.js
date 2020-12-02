import App from "./GoogleSearch";
import { shallow, mount } from "enzyme";
import { findByTestAtrr, testStore } from "../../utils/__test__";
import React from "react";
import { initialState as state } from "../../state/reducers/weatherReducer";
import GoogleSearch from "./GoogleSearch";
import { Provider } from "react-redux";

const setUp = (initialState = {}) => {
  const store = testStore(state);
  const wrapper = mount(
    <Provider store={store}>
      <GoogleSearch  />
    </Provider>
  );
  return wrapper;
};

describe("Google Search Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      weather: state,
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "searchComponent");
    expect(component.length).toBe(1);
  });
});
