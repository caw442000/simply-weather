import { types } from "./types";


export const initialState = {
  error: "",
  isFetching: false,
  data: {},
  toggleUS: true,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_START:
      return {
        ...state,
        isFetching: action.payload,
        error: "",
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: "",
      };
    case types.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.TOGGLE_METRIC:
      return {
        ...state,
        toggleUS: !state.toggleUS,
      };
    default:
      return state;
  }
};
