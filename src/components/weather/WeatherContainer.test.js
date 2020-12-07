import React from "react";
import WeatherContainer from "./WeatherContainer";
import { render, screen, cleanup } from "@testing-library/react";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";
import userEvent from "@testing-library/user-event";
import { initialState } from "../../store/reducers/weatherReducer";

afterEach(cleanup);

describe("<WeatherContainer />", () => {

    const state = initialState;
    const dispatch = jest.fn();
    test("Weather Container should render", () => {
    const { getByTestId, getByRole, queryByRole } = render(
      <DispatchContext.Provider value={dispatch}>
        <WeatherContext.Provider value={state}>
          <WeatherContainer />
        </WeatherContext.Provider>
      </DispatchContext.Provider>
    );

    const testid = getByTestId("component-weathercontainer")
    expect(testid).toBeInTheDocument();

    });
    test("Weather Container should render blank on initialization", () => {
      const state = initialState;
      const dispatch = jest.fn();

      const { getByTestId, getByRole, queryByRole } = render(
        <DispatchContext.Provider value={dispatch}>
          <WeatherContext.Provider value={state}>
            <WeatherContainer />
          </WeatherContext.Provider>
        </DispatchContext.Provider>
      );

      const testid = getByTestId("component-weathercontainer")
      expect(testid.hasChildNodes).toBeNull;

    });
  });

