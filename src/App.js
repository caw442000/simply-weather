import React, { useReducer } from "react";
import "./App.css";

import Header from "./components/Header";
import WeatherContainer from "./components/weather/WeatherContainer";
import { weatherReducer, initialState } from "./state/reducers/weatherReducer";

import { WeatherContext, DispatchContext } from "./contexts/WeatherContext";


const App = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <WeatherContext.Provider value={state}>
        <div className="app" data-test="component-app">
          <Header />
          <WeatherContainer />
        </div>
      </WeatherContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
