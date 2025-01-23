import "./SideBar.css";
import profileImage from "../../assets/profile-image.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile Image" className="sidebar__avatar" />
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
}

export default Sidebar;
