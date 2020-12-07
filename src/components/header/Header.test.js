import React from "react";
import Header from "./Header";
import { render, screen, cleanup } from "@testing-library/react";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />);
  });

  describe("when page is initialized", () => {
    test("Header text renders", () => {
      expect(screen.getByText(/simply weather/i).textContent).toBe(
        "Simply Weather"
      );
    });
  });
});
