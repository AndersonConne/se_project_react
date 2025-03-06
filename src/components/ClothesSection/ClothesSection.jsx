import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  handleButtonClick,
  clothingItems,
  selectedCard,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__items">Your Items</p>
        <button
          onClick={handleButtonClick}
          className="clothes__section__add-button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__item">
        {clothingItems.map((item) => {
          {
            if (currentUser._id === item.owner) {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            }
          }
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
