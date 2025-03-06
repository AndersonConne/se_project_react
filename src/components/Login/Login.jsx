import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Login({ onClose, activeModal, isOpen, handleLogin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Login"
      activeModal={activeModal}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="email"
        className="modal__label modal__label_type_register"
      >
        Email*{" "}
        <input
          type="email"
          className="modal__input"
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
          className="modal__input  modal__input_type_register"
          id="password"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default Login;
