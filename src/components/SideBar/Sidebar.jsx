import "./Sidebar.css";
import profileImage from "../../assets/profile-image.svg";

function Sidebar({ handleEditProfileClick, handleSignOut }) {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={profileImage}
          alt="Profile Image"
          className="sidebar__avatar"
        />
        <p className="sidebar__name">Terrence Tegegne</p>
      </div>
      <button className="sidebar__button" onClick={handleEditProfileClick}>
        Change profile data
      </button>
      <button className="sidebar__button" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default Sidebar;
