import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../assets/logo.svg";
import profileImage from "../../assets/profile-image.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue(!value);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <ToggleSwitch isOn={value} handleToggle={handleToggle} />
      <button
        type="button"
        onClick={handleAddClick}
        className="header__clothes-button"
      >
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__profile-container">
          <p className="header__profile-name">Terrance Tegegne</p>
          <img
            className="header__profile-pic"
            src={profileImage}
            alt="avatar picture"
          ></img>
        </div>
      </Link>
    </header>
  );
}

export default Header;
