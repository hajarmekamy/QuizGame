import React, { useContext } from "react";
import { StateContext } from "../Context/Providers/State";

const Options = ({ value, handleClick, element, correctAnswer }) => {
  const { state } = useContext(StateContext);

  let chosenOption = state.chosen_option;
  let timeExpired = state.time_expired;

  const changeColor = (el) => {
    if (el === chosenOption && el === correctAnswer) {
      return "green";
    } else if (el === chosenOption && el !== correctAnswer) {
      return "red";
    } else if (el === correctAnswer) {
      return "green";
    }
  };

  const styleToChangeColor = chosenOption && changeColor(element);

  return (
    <>
      <div>
        <button
          disabled={chosenOption !== undefined || timeExpired}
          className={`button-option ${styleToChangeColor}`}
          onClick={handleClick}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Options;
