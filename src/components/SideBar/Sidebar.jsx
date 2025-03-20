import "./Sidebar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Sidebar({ handleEditProfileClick, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={currentUser?.avatar}
          alt="Profile Image"
          className="sidebar__avatar"
        />
        <p className="sidebar__name">{currentUser?.name}</p>
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
