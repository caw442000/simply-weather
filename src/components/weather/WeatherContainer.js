import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./Forecast/ForecastWeather";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import { types } from "../../state/actions";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.grey[500],
        borderColor: theme.palette.grey[500],
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const WeatherContainer = () => {
  // const [state, setState] = React.useState({
  //   US: true,
  // });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.weather.error);
  const isFetching = useSelector((state) => state.weather.isFetching);
  const toggleMetric = useSelector((state) => state.weather.toggleUS);

  console.log("ToggleMetric", toggleMetric);

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    dispatch({ type: types.TOGGLE_METRIC });
  };

  return (
    <div className="weather__container">
      {isFetching ? (
        <CircularProgress size="4rem" color="inherit" thickness={4} />
      ) : error ? (
        <>
          <h1>Error: Input valid entry using zip code, city, or state and select from dropdown menu </h1>
        </>
      ) : (
        <>
        <div className = "weather__container__top">
       
          <Typography component="div" className="toggle">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>°C</Grid>
              <Grid item>
                <AntSwitch
                  checked={toggleMetric}
                  onChange={handleChange}
                  name="US"
                />
              </Grid>
              <Grid item>°F</Grid>
            </Grid>
          </Typography>
          <CurrentWeather metric={toggleMetric} />

          </div>
          <ForecastWeather metric={toggleMetric} />
          </>
      )}
    </div>
  );
};

export default WeatherContainer;
