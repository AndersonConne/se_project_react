import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionurl = filteredOption[0]?.url;
  const weatherOptionCondition = filteredOption[0]?.condition;
  console.log(weatherOptionurl);

  console.log(weatherData);
  return (
    <section className="weather">
      <p className="weather__temp">{weatherData.temp.F}&deg; F</p>
      <img
        src={weatherOptionurl}
        alt={weatherOptionCondition}
        className="weather__image"
      />
    </section>
  );
}

export default WeatherCard;
