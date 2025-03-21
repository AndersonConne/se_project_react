import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Login({ onClose, activeModal, isOpen, handleLogin, onButtonClick }) {
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
      redirectButtonText="or Sign up"
      onButtonClick={onButtonClick}
    >
      <label className="modal__label modal__label_type_register">
        Email*{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          name="email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label className="modal__label modal__label_type_register">
        Password*{" "}
        <input
          type="password"
          className="modal__input  modal__input_type_register"
          id="login-password"
          placeholder="Password"
          name="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default Login;
