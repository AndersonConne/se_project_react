import "../ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
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
