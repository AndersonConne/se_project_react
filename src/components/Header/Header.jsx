import "./Header.css";
import logo from "../../assets/logo.svg";
import profileImage from "../../assets/profile-image.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <p className="header__date">June 15, New York</p>
      <button className="header__clothes-button">+ Add Clothes</button>
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
