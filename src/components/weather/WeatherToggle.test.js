import React from "react";
import WeatherToggle from "./WeatherToggle";
import { render, screen, cleanup } from "@testing-library/react";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";
import userEvent from "@testing-library/user-event";
import { initialState } from "../../state/reducers/weatherReducer";

afterEach(cleanup);

describe("<WeatherToggle />", () => {
  beforeEach(() => {

   
  });

  describe("when page is initialized", () => {
    const state = initialState
    const dispatch = jest.fn()

    const { getByTestId, getByRole, queryByRole } = render( <DispatchContext.Provider value={dispatch} >
      <WeatherContext.Provider value={state}>
        <WeatherToggle />
      </WeatherContext.Provider>
    </DispatchContext.Provider>
);
    it("toggle should be true", () => {
      // const toggle = getByTestId('toggle');
      const toggleRole = getByRole('checkbox')


      console.log(toggleRole)

      toggleRole.focus()



      expect(toggleRole.checked).toEqual(true)
      
      
      userEvent.click(toggleRole)
      userEvent.click(toggleRole)

      expect(toggleRole.checked).toEqual(false)

    });
  });
});
