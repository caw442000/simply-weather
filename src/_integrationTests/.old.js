import moxios from "moxios";
import { testStore } from "../utils/__test__";

import { fetchWeather } from "../state/actions";

describe("fetchWeather action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = {
      error: "",
      isFetching: false,
      data: { current: {}, location: {}, forecast: {} },
      toggleUS: true,
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchWeather()).then(() => {
      const newState = store.getState();
      expect(newState.weather.data).toBe(expectedState);
    });
  });
});
