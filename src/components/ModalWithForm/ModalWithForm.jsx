import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  isOpen,
  onSubmit,
  name,
  redirectButtonText,
  onButtonClick,
}) {
  const redirectButtonTextClassName = `modal__redirect-button ${
    redirectButtonText && redirectButtonText.length > 0
      ? "modal__redirect-button_visible"
      : "modal__redirect-button_hidden"
  }`;
  return (
    <div className={`modal ${activeModal === isOpen && "modal_open"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" onClick={onClose} className="modal__close" />
        <form onSubmit={onSubmit} name={name} className="modal__form">
          {children}
          <div>
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
            <button
              className={redirectButtonTextClassName}
              onClick={onButtonClick}
              type="button"
            >
              {redirectButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
