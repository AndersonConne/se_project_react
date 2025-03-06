import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
function RegisterModal({ onClose, isOpen, activeModal, handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name, password, email, avatar });
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input modal__input_type_register"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label
        htmlFor="password"
        className="modal__label modal__label_type_register"
      >
        Password*{" "}
        <input
          type="text"
          className="modal__input modal__input_type_register"
          id="password"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="name" className="modal__label modal__label_type_register">
        Name *{" "}
        <input
          type="text"
          className="modal__input modal__input_type_register"
          id="name"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="avatar"
        className="modal__label modal__input_type_register modal__label_type_bottom-gap"
      >
        Avatar URL *{" "}
        <input
          type="url"
          className="modal__input modal__input_type_register"
          id="avatar"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarUrlChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
