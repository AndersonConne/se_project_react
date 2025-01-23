import { useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
const ToggleSwitch = () => {
  const { handleToggle, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  console.log(currentTemperatureUnit);
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
  //   return (
  //     <>
  //       <input
  //         className="toggle__switch"
  //         id={`react-switch-new`}
  //         type="checkbox"
  //       />
  //       <label className="toggle__label" htmlFor={`react-switch-new`}>
  //         <span className={`toggle__button`} />
  //       </label>
  //     </>
  //   );
};

export default ToggleSwitch;
