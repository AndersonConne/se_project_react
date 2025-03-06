import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionurl = filteredOption[0]?.url;
  const weatherOptionCondition = filteredOption[0]?.condition;
  return (
    <section className="weather">
      <p className="weather__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherOptionurl}
        alt={weatherOptionCondition}
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
