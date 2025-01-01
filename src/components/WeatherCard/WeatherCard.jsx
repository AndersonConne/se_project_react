import "./WeatherCard.css";
import weatherImage from "../../assets/sunny.svg";

function WeatherCard({ weatherData }) {
  console.log(weatherData);
  return (
    <section className="weather">
      <p className="weather__temp">{weatherData.temp.F}&deg; F</p>
      <img src={weatherImage} alt="weather image" className="weather__image" />
    </section>
  );
}

export default WeatherCard;
