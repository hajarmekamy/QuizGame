import React from "react";

const Options = ({
  value,
  handleClick,
  element,
  correctAnswer,
  chosenOption,
}) => {
  const changeColor = (el) => {
    if (el === chosenOption && el === correctAnswer) {
      return "green";
    } else if (el === chosenOption && el !== correctAnswer) {
      return "red";
    } else if (el === correctAnswer) {
      return "green";
    }
  };

  return (
    <>
      <div>
        <button
          className={chosenOption && changeColor(element)}
          onClick={handleClick}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Options;
