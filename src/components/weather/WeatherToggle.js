import React, {useContext} from "react";
import { WeatherContext, DispatchContext } from "../../contexts/WeatherContext";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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

// Toggle Metric Weather for App
const WeatherToggle = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(WeatherContext);
  

  const error = state.error
  const isFetching = state.isFetching
  const toggleMetric = state.toggleUS 


  const handleChange = () => {
    dispatch({ type: types.TOGGLE_METRIC });
  };

  return (
  
      <Typography component="div" className="toggle">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>°C</Grid>
          <Grid item>
            <AntSwitch
              id="toggle"
              data-testid="toggle"
              checked={toggleMetric}
              onChange={handleChange}
              name="US"
            />
          </Grid>
          <Grid item>°F</Grid>
        </Grid>
      </Typography>
  );
};

export default WeatherToggle;
