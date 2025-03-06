import { useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
const ToggleSwitch = () => {
  const { handleToggle, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <div className="toggle">
      <input
        type="checkBox"
        onChange={handleToggle}
        className="toggle__switch"
        id={`toggle-switch-new`}
      />
      <label htmlFor={`toggle-switch-new`} className="toggle__label">
        <span
          style={{ color: `${currentTemperatureUnit === "F" ? "white" : ""}` }}
          className="toggle__text"
        >
          F
        </span>
        <span
          style={{ color: `${currentTemperatureUnit === "C" ? "white" : ""}` }}
          className="toggle__text"
        >
          C
        </span>
        <span className={`toggle__button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
