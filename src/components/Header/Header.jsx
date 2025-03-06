import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../assets/logo.svg";
import profileImage from "../../assets/profile-image.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleSignupClick,
  handleLoginClick,
}) {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue(!value);
  };

  const currentUser = useContext(CurrentUserContext);

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
      {isLoggedIn ? (
        <>
          <button
            type="button"
            onClick={handleAddClick}
            className="header__clothes-button"
          >
            + Add Clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__profile-container">
              <p className="header__profile-name">{currentUser?.name}</p>
              <img
                className="header__profile-pic"
                src={currentUser?.avatar}
                alt={currentUser?.avatar}
              ></img>
            </div>
          </Link>
        </>
      ) : (
        <>
          <button className="header__button" onClick={handleSignupClick}>
            Sign Up
          </button>
          <button className="header__button" onClick={handleLoginClick}>
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
