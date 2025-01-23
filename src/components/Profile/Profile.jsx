import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "../Profile/Profile.css";

function Profile({ onCardClick, handleButtonClick, clothingItems }) {
  const myClothes = clothingItems.filter((item) => item._id);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          handleButtonClick={handleButtonClick}
          clothingItems={myClothes}
        />
      </section>
    </div>
  );
}

export default Profile;
