import "./ItemModal.css";

function ItemModal({ activeModal, selectedCard, onClose }) {
  return (
    <div
      className={`modal ${activeModal === "preview-garment" && "modal_open"}`}
    >
      <div className="modal__content modal__content_type_preview">
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image modal__image_type_preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
