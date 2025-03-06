import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

function EditProfileModal({ activeModal, onClose, isOpen, handleEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (name && avatar) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(name, avatar);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="email" className="modal__label">
        Avatar *{" "}
        <input
          type="url"
          className="modal__input"
          id="email"
          placeholder="Email"
          onChange={handleAvatarChange}
          value={avatar}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
