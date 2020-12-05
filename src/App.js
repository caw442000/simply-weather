import React, { useReducer, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import WeatherContainer from "./components/weather/WeatherContainer";
import { weatherReducer, initialState } from "./state/reducers/weatherReducer";

import { WeatherContext, DispatchContext } from "./contexts/WeatherContext";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const { data, isFetching, error, toggleUS } = state;

  return (
    <DispatchContext.Provider value={dispatch}>
      <WeatherContext.Provider value={state}>
        <div className="app" data-test="appComponent">
          <Header />
          <WeatherContainer />
        </div>
      </WeatherContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
