import React from "react";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
  const [state, setState] = React.useState({
    US: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="weather__container">
      <Typography component="div"className="toggle">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>°C</Grid>
          <Grid item>
            <AntSwitch checked={state.US} onChange={handleChange} name="US" />
          </Grid>
          <Grid item>°F</Grid>
        </Grid>
      </Typography>
      <CurrentWeather metric={state.US} />
      <ForecastWeather metric={state.US} />
    </div>
  );
};

export default WeatherContainer;
