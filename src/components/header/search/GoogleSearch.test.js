import React from "react";
import GoogleSearch from "./GoogleSearch";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  within,
} from "@testing-library/react";
import { WeatherContext, DispatchContext } from "../../../contexts/WeatherContext.js";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("<GoogeleSearch />", () => {

  test("GoogleSearch renders without error", () => {
    const { getByLabelText } = render(<GoogleSearch />);

    expect(screen.getByLabelText(/Enter a location*/i)).toBeTruthy();
  });

  test("Inputing text updates the local inputting state", () => {

    const { getByTestId, getByRole, queryByRole } = render(<GoogleSearch />);

    const autocomplete = getByTestId("commponent-googlesearch");
    const input = getByRole("textbox");
    input.focus();

    userEvent.type(input, "text");

    expect(input).toHaveValue("text");
  });
});
