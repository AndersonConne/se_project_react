import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
function RegisterModal({
  onClose,
  isOpen,
  activeModal,
  handleRegister,
  onButtonClick,
}) {
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
      redirectButtonText="or Log in"
      onButtonClick={onButtonClick}
    >
      <label className="modal__label">
        Email*{" "}
        <input
          type="email"
          className="modal__input modal__input_type_register"
          id="register-email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label className="modal__label modal__label_type_register">
        Password*{" "}
        <input
          type="password"
          className="modal__input modal__input_type_register"
          id="register-password"
          placeholder="Password"
          name="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label className="modal__label modal__label_type_register">
        Name *{" "}
        <input
          type="text"
          className="modal__input modal__input_type_register"
          id="register-name"
          placeholder="Name"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className="modal__label modal__input_type_register modal__label_type_bottom-gap">
        Avatar URL *{" "}
        <input
          type="url"
          className="modal__input modal__input_type_register"
          id="register-avatar"
          placeholder="Avatar URL"
          name="avatar"
          required
          onChange={handleAvatarUrlChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
