import React, { useContext, useState } from "react";
import { StateContext } from "../Context/Providers/State";

const QuizHelpers = ({ helperTwoActive, removeTwoOptions }) => {
  const { state, actions } = useContext(StateContext);
  let timeExpired = state.time_time_expired;

  const [helperOneActive, setHelperOneActive] = useState();

  const addSeconds = () => {
    if (!timeExpired) {
      setHelperOneActive(true);
      actions.time.setTimer(state.timer + 10);
    }
  };

  return (
    <div>
      <button
        className="button-50-50"
        disabled={helperTwoActive || timeExpired}
        onClick={removeTwoOptions}
      >
        50/50
      </button>
      <button
        className="plus-10-button"
        disabled={helperOneActive || timeExpired}
        onClick={addSeconds}
      >
        +10
      </button>
    </div>
  );
};

export default QuizHelpers;
