import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";

function ClothesSection({ onCardClick, handleButtonClick, clothingItems }) {
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
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
