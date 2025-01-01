import "./Header.css";
import logo from "../../assets/logo.svg";
import profileImage from "../../assets/profile-image.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddClick, weatherData }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        onClick={handleAddClick}
        className="header__clothes-button"
      >
        + Add Clothes
      </button>
      <div className="header__profile-container">
        <p className="header__profile-name">Terrance Tegegne</p>
        <img
          className="header__profile-pic"
          src={profileImage}
          alt="avatar picture"
        ></img>
      </div>
    </header>
  );
}

export default Header;
