import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

function EditProfileModal({ activeModal, onClose, isOpen, handleEditProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser?.name;
  const avatarUrl = currentUser?.avatar;
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (username && avatarUrl) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [onClose]);

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
      <label className="modal__label">
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
      <label className="modal__label">
        Avatar *{" "}
        <input
          type="url"
          className="modal__input"
          id="avatar"
          placeholder="Avatar"
          onChange={handleAvatarChange}
          value={avatar}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
