import React, { useState, useRef, useMemo, useContext } from "react";
import throttle from "lodash/throttle";
import parse from "autosuggest-highlight/parse";
import { DispatchContext } from "../../../contexts/WeatherContext";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import * as api from "../../../api";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { types } from "../../../store/reducers/types";
import './GoogleSearch.css'


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_LOCATION_API_KEY;

// updates Material UI styling

const CssAutoComplete = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
      "& .MuiInputLabel": {
        color: "white",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
    },
  },
  input: {},
})(Autocomplete);

const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
    "&::placeholder": {
      color: "white",
    },
  },
}));

// load script to add script to index.html

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const GoogleSearch = () => {
  const dispatch = useContext(DispatchContext);

  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  // checks if window is up and it script hasn't been loaded
  // loads the googleapi script to add autosearch with google functionality

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&types=regions`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  // fetchs the predictions to add to autosearch dropdown

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);





  // submit for if user doesn't seleect from drop down box
  // less accurate but doesn't disrupt user flow

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetchWeather(inputValue);
      // dispatch(fetchForecast(search));
    } catch (error) {
      console.log("zipcode submit error", error);
    }

    setInputValue("");
    setValue(null);
  };

  // submit for if user clicks on dropdown item
  // uses google supplied lat lng to send to weather api


  const googleSubmit = async (option) => {
    let submission;
    try {
      await getGeocode({ address: option.description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          // console log to show coordinates
          // console.log("📍 Coordinates: ", { lat, lng });
          submission = `${lat},${lng}`;
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    } catch (error) {
      console.log("error with geocode", error);
    }

    try {
      console.log("before fetch weather");
      await fetchWeather(submission || inputValue);
    } catch (error) {
      console.log("google submit error", error);
    }

    setInputValue("");
    setValue(null);
    submission = null;
  };

  // helper function to help limit Options Filter function
  // unable to limit google request return so wanted to limit what
  // user sees in dropdown.  

  // No Longer need as error was based on description submissions in
  // Google submit however switched to lat lng submission to api

  // function containsAny(source, target) {
  //   let result = source?.filter(function (item) {
  //     return target.indexOf(item) > -1;
  //   });
  //   return result.length > 0;
  // }

  // const OptionFilter = (options) => {
  //   const filteredOptions = options?.filter((option) => {
  //     let types = option.types;
  //     return containsAny(types, [
  //       "postal_code",
  //       "street_address",
  //       "locality",
  //       "geocode",
  //     ]);
  //   });

  //   console.log("options", filteredOptions);

  //   return filteredOptions;
  // };

  // async call to dispatch to get weather

  const fetchWeather = async (search) => {
    await dispatch({ type: types.FETCH_WEATHER_START, payload: true });
    try {
      const { data } = await api.fetchForecastWeather(search);
      dispatch({ type: types.FETCH_WEATHER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: types.FETCH_WEATHER_FAILURE, payload: error });
    }
  };

 


  return (
    <>
      <form
        className="search"
        onSubmit={formSubmit}
        data-testid="commponent-googlesearch"
      >
        <CssAutoComplete
          id="google-map"
          data-testid="autocomplete"
          classes={classes}
          freeSolo
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={(x) => x}
          options={options}
          autoSelect
          autoComplete
          includeInputInList
          filterSelectedOptions
          fullWidth
          value={value}
          onClick={() => googleSubmit(value)}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter a location"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                className: classes.input,
              }}
              required

              // data-testid="input"
            />
          )}
          renderOption={(option) => {
            // console.log("options", option)
            // if (option.types === "postal_code") {
            //   return null;
            // }
            const matches =
              option.structured_formatting.main_text_matched_substrings;
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );

            return (
              <Grid container alignItems="center">
                <Grid item>
                  <LocationOnIcon color="action" />
                </Grid>
                <Grid onClick={() => googleSubmit(option)} item xs>
                  {parts.map((part, index) => (
                    // <Grid key={index} item xs onClick={() => googleSubmit(option)} style={{ display: "flex", flexDirection: "column" }}>

                    <span
                      key={index}
                      style={{ fontWeight: part.highlight ? 700 : 400 }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="textSecondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />
      </form>
    </>
  );
};

export default GoogleSearch;
