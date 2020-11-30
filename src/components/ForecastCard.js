import React from "react";
import Moment from "react-moment";

const ForecastCard = ({ index, forecast, metric }) => {
  console.log("forecast", forecast);

  return (
    <div className="forecast__card">
      <div>
        {index === 0 ? (
          <h1>Today</h1>
        ) : index === 1 ? (
          <h1>Tomorrow</h1>
        ) : (
          <Moment format="dddd">{forecast?.date}</Moment>
        )}
      </div>
      <img
        className="forecast__card__icon"
        src={forecast?.day?.condition.icon}
        alt="weather"
      />
      <div>
        {metric === true ? (
          <h1 className="">
            {" "}
            {`${Math.round(forecast?.day?.mintemp_f)}° / ${Math.round(
              forecast?.day?.maxtemp_f
            )}°`}
          </h1>
        ) : (
          <h1 className="">
            {" "}
            {`${Math.round(forecast?.day?.mintemp_c)}° / ${Math.round(
              forecast?.day?.maxtemp_c
            )}°`}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ForecastCard;
