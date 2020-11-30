import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_FORECAST_START,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
} from "../actions/weatherAction";

const TOGGLE_METRIC = " TOGGLE_METRIC";

const initialState = {
  error: "",
  isFetchingCurrent: false,
  isFetchingForecast: false,
  city: "",
  zipCode: "",
  current: [],
  forecast: [],
  data: [],
  toggleUS: true,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: "",
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case TOGGLE_METRIC:
      return {
        ...state,
        toggleUS: action.payload,
      };
    // case FETCH_FORECAST_START:
    //   return {
    //     ...state,
    //     isFetchingForecast: true,
    //   };
    // case FETCH_FORECAST_SUCCESS:
    //   return {
    //     ...state,
    //     isFetchingForecast: false,
    //     data: action.payload,
    //     error: "",
    //   };
    // case FETCH_FORECAST_FAILURE:
    //   return {
    //     ...state,
    //     isFetchingForecast: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
