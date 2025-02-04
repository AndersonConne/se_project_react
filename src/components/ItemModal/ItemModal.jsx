import "./ItemModal.css";

function ItemModal({ activeModal, selectedCard, onClose, isOpen, onDelete }) {
  return (
    <div className={`modal ${activeModal === isOpen && "modal_open"}`}>
      <div className="modal__content modal__content_type_preview">
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image modal__image_type_preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <button onClick={onDelete} className="modal__delete-button">
            Delete Item
          </button>
        </div>
        <p className="modal__weather">Weather: {selectedCard.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
