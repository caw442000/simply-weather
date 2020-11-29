import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "../store/actions";

import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import { GridList } from "@material-ui/core";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_LOCATION_API_KEY;

// implement yup for validation
// move to formik

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

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

const GoogleSearch = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);

  const [search, setSearch] = useState({
    zipcode: "",
    city: "",
    state: "",
  });

  console.log("length", weatherData?.length);
  console.log("data", weatherData);

  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

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

  const fetch = React.useMemo(
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

    // if (value) {

    //   formZipCodeSubmit(e)
    // }

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log("zip", search);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    // console.log("value to submit", value?.description);
    // console.log("value to option", option);

    try {
      // await dispatch(fetchWeather(option?.description || option || inputValue));
      await dispatch(fetchWeather(inputValue));
      // dispatch(fetchForecast(search));
    } catch (error) {
      console.log("zipcode submit error", error);
    }

    setSearch({
      zipcode: "",
      city: "",
      state: "",
    });

    setInputValue("");
    setValue(null);
  };
  const googleSubmit = async (option) => {
    // console.log("value to submit", value?.description);
    console.log("value to option", option);

    let submission = option;
    try {
      // await dispatch(fetchWeather(option?.description || option || inputValue));
      await dispatch(fetchWeather(submission?.description || inputValue));
      // dispatch(fetchForecast(search));
    } catch (error) {
      console.log("zipcode submit error", error);
    }

    setSearch({
      zipcode: "",
      city: "",
      state: "",
    });

    setInputValue("");
    setValue(null);
    submission = null;
  };

  function containsAny(source, target) {
    let result = source.filter(function (item) {
      return target.indexOf(item) > -1;
    });
    return result.length > 0;
  }
  const OptionFilter = (options) => {
    // const filteredOptions = options.filter((option) => ['postal_code', 'geocode', 'locality'].some(option.types))
    const filteredOptions = options.filter((option) => {
      let types = option.types;
      return containsAny(types, [
        "postal_code",
        "street_address",
        "locality",
        "geocode",
      ]);
    });

    console.log("options", filteredOptions);
    options.map((option) => {
      console.log("options.types", option.types[0]);
    });
    return filteredOptions;
  };
  return (
    <>
      {/* <form className="search" onSubmit={formSubmit}> */}
      {/* <label htmlFor="zipcode">Zip Code: </label>
        <input
          type="text"
          name="zipcode"
          value={search.zipcode}
          onChange={handleChange}
          style={{height: "1.5rem" }}
        />


        <button>ENTER</button> */}
      <Autocomplete
        id="google-map-demo"
        // style={{ width: 300 }}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={(x) => OptionFilter(x)}
        options={options}
        autoSelect
        autoComplete
        includeInputInList
        filterSelectedOptions
        fullWidth
        value={value}
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          console.log("what is input change", inputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter a location"
            variant="outlined"
            fullWidth
          />
        )}
        renderOption={(option) => {
          // console.log("options", option)
          if (option.types === "postal_code") {
            return null;
          }
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length])
          );

          return (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon className={classes.icon} />
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
      {/* </form> */}
    </>
  );
};

export default GoogleSearch;