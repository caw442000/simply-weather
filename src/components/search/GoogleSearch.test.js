
import React from "react";
import GoogleSearch from "./GoogleSearch";
import { render, screen, cleanup, fireEvent, within } from "@testing-library/react";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";
import userEvent from "@testing-library/user-event";

afterEach(cleanup)


describe("<GoogeleSearch />", () => {
  // beforeEach(() => {
  //   render(<GoogleSearch />);
  // });

  describe("when page is initialized", () => {
    it("then shows Enter a location", () => {
      // "Use Dark Theme" text is only shown when the light theme is active

      const { getByText, getByLabelText } = render(<GoogleSearch />);


      // expect(screen.getByText(/Enter a location*/i)).toBeTruthy();
    });
  });
});

it('Inputing text updates the state', () => {
  // const { getByText, getByLabelText, getByTestId } = render(<GoogleSearch />);

  const { getByTestId, getByRole, queryByRole } = render(<GoogleSearch />);

  // const autocomplete = getByTestId('autocomplete');
  const autocomplete = getByTestId('commponent-googlesearch');
  // const input = within(autocomplete).querySelector('input')
  const input = getByRole('textbox')
  input.focus()

  userEvent.type(input, 'text')

  
  
  
  // expect(getByTestId("input").textContent).toContain("Enter a location")
  // // expect(getByLabelText(/enter a location/i).textContent).toBe("")
  
  // fireEvent.change(getByTestId("input"), {target: {value: 'Text' } } )

  expect(input).toHaveValue('text')
  
})
