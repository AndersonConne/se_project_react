import profileImage from "../../assets/profile-image.svg";
import "../SideBar/SideBar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile Image" className="sidebar__avatar" />
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
}

export default Sidebar;
