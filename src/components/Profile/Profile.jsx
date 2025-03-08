import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "../Profile/Profile.css";

function Profile({
  onCardClick,
  handleButtonClick,
  clothingItems,
  handleEditProfileClick,
  handleSignOut,
  selectedCard,
  onCardLike,
}) {
  const myClothes = clothingItems.filter((item) => item._id);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfileClick={handleEditProfileClick}
          handleSignOut={handleSignOut}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          handleButtonClick={handleButtonClick}
          clothingItems={myClothes}
          selectedCard={selectedCard}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
