import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from "../actions/weatherAction";

export const TOGGLE_METRIC = " TOGGLE_METRIC";

const initialState = {
  error: "",
  isFetching: false,
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
        error: "",
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
        toggleUS: !state.toggleUS,
      };
    default:
      return state;
  }
};
