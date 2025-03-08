import "../ItemCard/ItemCard.css";
import like from "../../assets/like.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked: item.likes.includes(currentUser._id),
    });
  };

  const isLiked = item.likes.some((id) => id === currentUser?._id);
  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button
            className={isLiked ? "card__like card__like_active" : "card__like"}
            onClick={handleLike}
          ></button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        alt={item.name}
        src={item.imageUrl}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
